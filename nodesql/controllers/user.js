const User = require('../models').user
const util = require('util')
const sha1 = require('sha1')
const Tips = require('../utils/tips')
const JwtUtil = require('../utils/jwt')
// console.log(User);
module.exports = {
  create(req, res) {
    return User.create({
      name: req.body.username,
      password: sha1(req.body.passwd),
      phone: req.body.phone
    })
    .then(user => {
      res.status(200).send(Tips[0])
    })
    .catch(error => res.status(400).send(error))
  },
  login(req, res) {
    return User.getUsers({
      where: {
        name: req.body.username,
        password: sha1(req.body.password)
      }
    }).then(user => {
      if (user && user.length > 0) {
        let jwt = new JwtUtil(req.body.username)
        res.send({
          code: 0,
          token: jwt.generateToken(),
          msg: 'ok'
        })
      } else {
        res.send(Tips[1006])
      }
    })   
    .catch(error => res.status(400).send(error))
  },
  getUserInfo(req, res) {
    let jwt = new JwtUtil(req.query.token)
    let result = jwt.verifyToken()
    return User.getUsers({
      attributes: ['id', 'name', 'phone'],
      where: {
        name: result
      }
    }).then(user => {
      if (user && user.length > 0) {
        res.send({...Tips[0], data: user})
      } else {
        res.send(Tips[1006])
      }
    })   
    .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    console.log(util.inspect(User));
    return User.getUsers({})
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error))
  }
}
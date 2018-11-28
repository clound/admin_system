const Topic = require('../models').topic
const User = require('../models').user
const JwtUtil = require('../utils/jwt')
const Tips = require('../utils/tips')
// console.log(User);
module.exports = {
  create(req, res) {
    let token = req.headers.jwt
    let jwt = new JwtUtil(token)
    let result = jwt.verifyToken()
    let user = User.build({
      id: result.id
    })
    return user.createTopic({
      type: req.body.type,
      title: req.body.title,
      userId: result.id,
      description: req.body.description,
      content: req.body.content
    })
    .then(data => {
      res.status(200).send(Tips[0])
    })
    .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Topic.findAndCountAll({
      include: {
        model: User,
        as: 'user',
        attributes: ['name']
      }
    })
    .then(data => {
      // console.log(data)
      res.status(200).send({...Tips[0], data})})
    .catch(error =>{
      console.log(error)
      res.status(400).send(error)})
  }
}
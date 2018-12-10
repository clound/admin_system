const Topic = require('../models').topic
const User = require('../models').user
const Tips = require('../utils/tips')
// console.log(User);
module.exports = {
  create(req, res) {
    let user = User.build({
      id: req.api_token.id
    })
    return user.createTopic({
      type: req.body.type,
      title: req.body.title,
      userId: req.api_token.id,
      description: req.body.description,
      content: req.body.content
    })
    .then(data => {
      res.status(200).send(Tips[0])
    })
    .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    let id = req.query.id
    console.log(id);
    let pg = req.query.page || 1
    let limit = req.query.limit || 10
    return Topic.findAndCountAll({
      limit: Number(limit),
      offset: limit * (pg - 1),
      where: {
        ...id ? { id: id } : ''
      },
      include: {
        model: User,
        as: 'user',
        attributes: ['name'],
        where: {
          'id': req.api_token.id
        }
      }
    })
    .then(data => {
      // console.log(data)
      res.status(200).send({...Tips[0], data})})
    .catch(error =>{
      console.log(error)
      res.status(400).send(error)})
  },
  delete(req, res) {
    let id = req.body.id
    return Topic.destroy({
      where: {
        id
      }
    })
    .then(data => {
      res.status(200).send({...Tips[0], data})})
    .catch(error =>{
      console.log(error)
      res.status(400).send(error)})
  },
  update(req, res) {
    let id = req.body.id
    let status = req.body.status
    return Topic.update(
      {ispublished: !status}, 
      {
        where: {
          id
        }
    })
    .then(data => {
      res.status(200).send({...Tips[0], data})})
    .catch(error =>{
      console.log(error)
      res.status(400).send(error)})
  }
}
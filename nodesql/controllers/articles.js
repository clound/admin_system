const Topic = require('../models').topic
// const util = require('util')
const Tips = require('../utils/tips')
// console.log(User);
module.exports = {
  create(req, res) {
    // for(let i in Topic) console.log(i)
    return Topic.create({
      type: req.body.type,
      title: req.body.title,
      description: req.body.description,
      content: req.body.content
    })
    .then(data => {
      // console.log(data, 1);
      res.status(200).send(Tips[0])
    })
    .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Topic.findAndCountAll({})
    .then(data => res.status(200).send({...Tips[0], data}))
    .catch(error => res.status(400).send(error))
  }
}
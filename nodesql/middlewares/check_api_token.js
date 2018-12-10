const JwtUtil = require('../utils/jwt')
const Tips = require('../utils/tips')

module.exports = function(req, res, next){
  let token = req.body.jwt || req.query.jwt || req.headers.jwt;
  if (token) {
    let jwt = new JwtUtil(token)
    let result = jwt.verifyToken()
    req.api_token = result
    next()
  } else {
    return res.status(403).send({
      ...Tips[1003],
      msg: '没有提供token'
    })
  }
}
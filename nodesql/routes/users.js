const express = require('express')
const router = express.Router()
var userController = require('../controllers').user;
const checkToken = require('../middlewares/check_api_token')


router.post('/signup', (req, res, next) => {
    userController.create(req, res)
})

router.post('/login', (req, res, next) => {
    userController.login(req, res)
})
router.get('/info', checkToken, (req, res, next) => {
    userController.getUserInfo(req, res)
})
router.get('/logout', checkToken, (req, res, next) => {
    userController.logout(req, res)
})

// router.get('/:name', function (req, res) {
//     var saveUser = {
//         name:req.query.name,
//         age:req.query.age,
//         height:req.query.height,
//         weight:req.query.weight
//     };

//     return db.sequelize.transaction(function(t){
//         console.log("+++++++++++++++++++");
//         return User.create(saveUser,{
//             transaction:t
//         }).then(function(result){
//             res.render('users', {
//                 name: req.query.name
//               })
//         }).catch(function(err){
//             console.log("发生错误：" + err);
//         });
//     })
// })
// router.get('/get/:name',function(req,res,next){
//     console.log(req.params.name);
//     return db.sequelize.transaction(function(t){
//         return User.findAll({
//             name: req.params.name
//         },{
//             transaction:t
//         }).then(function(result){
//             console.log(result);
//             // res.send(result)
//             res.render('info', {result})
//         }).catch(function(err){
//             console.log("发生错误：" + err);
//         });
//     });
// });

module.exports = router
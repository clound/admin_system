const express = require('express')
const router = express.Router()
// var db = require('../sqldb');
// var Student = db.Student;
// var Selcourse = db.Selcourse;
// var Course = db.course;
router.get('/student', function (req, res, next) {
    // return db.sequelize.transaction(function(t){
    //    return  Student.findAll().then(function(stu){
    //         // res.render('info', {stu})
    //         res.send(stu)
    //     }).catch(function(err){
    //         console.log("发生错误：" + err);
    //     });
    // })
})
router.get('/stud', function (req, res, next) {
    // return db.sequelize.transaction(function(t){
    //    return  Student.findAll({
    //         where: {name: '张三丰'},
    //         include: [{
    //             model: Course,
    //             sid: '1001' 
    //             // include: [{
    //             //     model: Selcourse
    //             // }]
    //             // association: Selcourse.hasOne(Course, {foreignKey:'cid', as:'manager'}),
    //         }]
    //     }).then(function(stu){
    //         console.log(stu);
    //        res.send(stu)
    //         // res.render('info', {stu})
    //     }).catch(function(err){
    //         console.log("发生错误：" + err);
    //     });
    // })
})
module.exports = router
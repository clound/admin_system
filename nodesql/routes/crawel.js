var request = require('request')
var cheerio = require('cheerio')
var path = require('path')
var fs = require('fs')
// var async = require('async')
// var URL = require('url')
var superagent = require('superagent')


const express = require('express')
const router = express.Router()
// var db = require('../sqldb');
// var Crawel = db.Crawel;

var options = [] //用于存储网址链接的数组
var n = 0

for (var i = 1319; i <1320; i++) {
    var obj = {
        url: 'http://jandan.net/ooxx/page-' + i,
        headers:{
            'User-Agent': 'request',
            'Referer': 'http://www.mzitu.com/'
        }
    }
    options.push(obj);
}

//利用fs模块download图片
function downloadImg(url, filename, callback) {
    var stream = fs.createWriteStream('public/images/' + filename);
    request({url,headers:{'Referer': 'http://www.mzitu.com'}})
    .on('error',function(){
        console.log('done no');
    }).pipe(stream).on('close', callback);
}

router.get('/', function (req, res, next) {
    // let pg = req.query.page
    // let limit = req.query.limit
    // return  Crawel.findAndCountAll({
    //     'limit': Number(limit),
    //     'offset': limit * (pg - 1)
    // }).then(function(result){
    //     res.json({
    //         code: 0,
    //         message: 'success',
    //         data: result
    //     })
    // }).catch(function(err){
    //     console.log("发生错误：" + err);
    // });
})
router.get('/start', function (req, res, next) {
    
    // superagent.get('http://www.mzitu.com/mm/page/2/')
    // .end(function (err, sres) {
    //   // 常规的错误处理
    //   if (err) {
    //     return next(err);
    //   }
    //   // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
    //   // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
    //   // 剩下就都是 jquery 的内容了
    //   var $ = cheerio.load(sres.text);
    //   var items = [];
    //   $('#pins img').each(function (idx, element) {
    //     var $element = $(element);
    //     var imgSrc = $element.attr('data-original');
    //     var filename = path.basename(imgSrc.toString())
    //     // var addr = URL.parse(req.url)
    //     console.log(req.headers.host)
    //     downloadImg(imgSrc, filename, function () {
    //         console.log(filename + 'upload 完成');
    //     });
    //     items.push({
    //       name: $element.attr('alt'),
    //       url:  `http://${req.headers.host}/images/${filename}`,
    //       date: $($element.parent().nextAll()[1]).text(),
    //       view: $($element.parent().nextAll()[2]).text()
    //     });
    //   });
    //   return  Crawel.bulkCreate(items, { individualHooks: true }).then(function(result){
    //         res.json(items)
    //     }).catch(function(err){
    //         console.log("发生错误：" + err);
    //     });
    // });
    // console.log(items);
    
})
router.get('/end', function (req, res, next) {
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
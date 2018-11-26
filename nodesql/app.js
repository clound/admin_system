const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const sqldb = require('./models');
const routes = require('./routes');
const JwtUtil = require('./utils/jwt');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))// 设置存放模板文件的目录
app.set('view engine', 'ejs')// 设置模板引擎为 ejs
app.use(express.static(path.resolve(__dirname,'./public')));

routes(app)

sqldb.sequelize.sync({force: false}).then(function() {
    console.log("Server successed to start");
}).catch(function(err){
    console.log("Server failed to start due to error: %s", err);
});
app.use(function (req, res, next) {
    // 我这里知识把登陆和注册请求去掉了，其他的多有请求都需要进行token校验 
    if (req.url != '/user/login' && req.url != '/user/signup') {
        let token = req.headers.token;
        let jwt = new JwtUtil(token);
        let result = jwt.verifyToken();
        // 如果考验通过就next，否则就返回登陆信息不正确
        if (result == 'err') {
            console.log(result);
            res.send({status: 403, msg: '登录已过期,请重新登录'});
            // res.render('login.html');
        } else {
            next();
        }
    } else {
        next();
    }
});
app.get('/', function (req, res) {
  res.send('hello, express')
})

app.listen(3000, '0.0.0.0')
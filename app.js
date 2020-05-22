var createError = require('http-errors');
const express = require('express'); //引入express模块
var path = require('path');
//routes
const routers = require('./routes/index');

const app = express(); //创建express的实例

//创建ejs模块
var ejs = require('ejs');

//设置assets文件夹为存放静态文件的目录
app.use('/assets', express.static(path.join(__dirname, 'assets')))
    // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* 引入cors 设置跨域访问 */
const cors = require('cors');
app.use(cors());

//配置路由
app.use(routers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    console.log(err)
        // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function() { ////监听3000端口
    console.log('Server running at 3000 port');
});

module.exports = app;
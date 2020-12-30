const express = require('express')
const app = express()

// 获取配置信息
app.config = require('./config/config');

// region 加载控制器
const HomeController = require('./app/controller/HomeController')(app);

app.controller = {
    home: new HomeController()
};
// endregion 加载控制器

// region 加载服务
const HomeService = require('./app/service/HomeService')(app);

app.service = {
    homeService: new HomeService(),
};
// endregion 加载服务

// 引入sequelize
const Sequelize = require('sequelize');
const sequelize = require('./config/sequelize')

// 同步模型到数据库，这个迁移数据库时使用
// sequelize.sync()

// sequelize连接数据库
sequelize
    .authenticate()
    .then(() => {
        console.log('连接成功');
    })
    .catch(err => {
        console.log('连接失败'+ err);
    });

// region 加载model
app.sequelize = sequelize;
app.user = require('./app/model/user')(sequelize, Sequelize);
app.restaurant = require('./app/model/restaurant')(sequelize, Sequelize);
app.setting = require('./app/model/setting')(sequelize, Sequelize);
// endregion 加载model

// 初始化路由
const registerRouter = require('./app/router');
registerRouter(app);

if (!module.parent) {
    app.listen(app.config.port);
    console.log('$ open http://127.0.0.1:' + app.config.port);
}
process.on('uncaughtException', (err) => {
    console.log('这里有个未捕获的同步错误', err);
});
process.on('unhandledRejection', (err) => {
    console.log('这里有个未处理的异步错误', err)
});


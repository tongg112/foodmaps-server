'use strict';
const Sequelize = require('sequelize');
// 测试
module.exports = app => {
    class HomeService {

        // 测试
        async getUserList() {
            // 获取所有数据
            let list = await app.user.findAll();
            return list;
        }

    }

    return HomeService;
};


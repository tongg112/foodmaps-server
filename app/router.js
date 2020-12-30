'use strict';

module.exports = app => {
    // 测试
    app.get('/', app.controller.home.test);
};

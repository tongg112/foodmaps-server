'use strict';

// 主页控制器
module.exports = app => {
    class HomeController {

        /**
         * 测试
         * @param req
         * @param res
         * @returns {Promise<void>}
         */
        async test(req, res) {

            let resultData = await app.service.homeService.getUserList();
            res.json(resultData);

        }
    }
    return HomeController;
};

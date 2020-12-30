const Sequelize = require('sequelize');
// 获取配置信息
const config = require('./config');

const sequelize = new Sequelize(config.mysql.db, config.mysql.user, config.mysql.password, {
    dialect: 'mysql',
    port: config.mysql.port,
    quoteIdentifiers: false,
    logging: true,
    autocommit:true,
    define: {
        timestamps: false, // 时间戳
        underscored:true, // 防止驼峰式字段被默认转为下划线
        paranoid: false, // 软删除
        freezeTableName: true
    },
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: function (field, next) { // for reading from database
            if (field.type === 'DATETIME') {
                return field.string()
            }
            return next()
        }
    },
    timezone: '+08:00' //for writing to database
});

module.exports = sequelize;

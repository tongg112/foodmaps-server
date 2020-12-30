// 配置文件
const config = {
    port: 3001,
    url: {
        cors: "http://127.0.0.1:8080,http://localhost:8080",
    },
    mysql: {
        db: 'foodmaps',
        user: 'root',
        password: 'root',
        host: '127.0.0.1',
        port: '3306'
    }
}
module.exports = config

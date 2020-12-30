## 安装生成模型工具
```shell script
npm install -g sequelize
npm install -g sequelize-auto
npm install -g mysql2
```
使用参数
```shell script
sequelize-auto -h  -d  -u  -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName]

```
## 自动生成模型
```shell script

sequelize-auto -o "./app/model" -d foodmaps -h 127.0.0.1 -u root -p 3306 -x root -e mysql
```

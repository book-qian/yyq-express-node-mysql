# yyq-express-node-mysql

学习 Node+Express+MySql 使用

### Node 使用 Sequlize 连接 mysql 数据库注意事项

## 要安装基于 node 的驱动 mysql2

`npm install --save mysql2`

## 使用 Sequlize cli 初始化配置

```javascript
1.安装脚手架 npm install --save  sequelize-cli
2.使用脚手架初始化配置 npx sequelize-cli init
3.创建模型 npx sequelize-cli model:generate --name User         --attributes firstName:string,lastName:string,email:string
4.根据数据库迁移文件新建表 npx sequelize-cli db:migrate
```

配置说明:
1.node版本(v10.13.0)
2.项目所有的依赖项都在package.json的dependencies中.安装好node之后,可以使用npm install 进行下载


文件结构说明:
#入口文件index.js(如需修改,可以在pakage.json的 "main" 属性中修改)
#app.js:用于服务器的创建,监听,依赖项的导入
#router.js:用于处理路由
#db.json:用于存储数据
#student.js:专门用于操作数据库中的数据
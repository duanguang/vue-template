# SCP管理后台

#### 项目背景
   
#### 里程碑

> 2018.12.21 项目立项

#### 负责人
- 产品负责人 : 
- 前端开发负责人 : 
- 测试 : 
- 后端 : 

#### 项目结构汇总
```
│  .e-config.js
│  .editorconfig
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .npmrc
│  .postcssrc.js
│  .travis.yml
│  index.html
│  Jenkinsfile
│  package.json
│  README.md
│  yarn.lock
├─src
│  └─home --- home入口目录
│     │  App.vue
│     │  index.html
│     │  main.js  --- 入口文件
│     ├─asset --- 静态资源
│     ├─components  --- 常用组件、公用组件
│     ├─constants --- 常量、枚举
│     ├─model --- 实体类(前端数据处理工厂)
│     ├─pages --- 页面文件目录
│     ├─plugin  --- 插件目录
│     ├─router  --- 路由配置目录
│     ├─service --- API接口
│     ├─store --- 前端数据中心
│     └─theme --- 主题
├─static  --- 静态文件
└─test  --- 测试目录

```
#### 项目整体结构

- vue.js
- iview 基础组件库
- brain-vue-cli 脚手架
- webpack 自动化构建
- hoolinks 基础服务库

#### 关键业务描述



#### 开发工具
- webstrom,vscode

#### 环境
- nodejs(9.8.0)

#### 测试环境链接


## Build Setup

``` bash
# install dependencies
yarn install

# serve
npm run dev
yarn dev

# build for production with minification
yarn build:qa qa环境
yarn build:uat uat环境
yarn build:prod 生产环境

```

#### 项目启动
1. npm install
2. npm run serve（账户密码随意输入）
3. npm run nd（可选择：因项目中部分接口是利用的本地服务）

#### 项目优点
1. 大家可以很快速上手，易修改易阅读易融合。
2. 只配置了vue后台项目所必备的的npm包。
3. 完成了后台项目基础页面布局、组件分离、路由搭建、axios请求封装、vuex模块化、mock数据、登录流程、本地服务（根据需求删除server文件即可）、清晰的目录结构、完善的代码注释。
#### 项目初衷
- 搭建一个由'vuecli3.x'、'vue2.x'、'vue全家桶'、'element-UI'、'axios'构建的项目
- 辅助插件：vue-fragment、swiper、mockjs、better-scroll、vuex-persistedstate、sass
#### 项目结构
- server ： 基于koa搭建的本地服务
- src : 项目主要代码
  - api ：请求接口配置
  - assets ： 静态资源（字体、样式）
  - components ： 公共组件
    - appheader : 页面header
    - crumbs ： 面包屑组件
    - navbar ： 页面侧边栏
  - mock ： mock数据
  - pages ：页面
    - home ：首页
    - Information ：mock示例页
    - fullPage ：element完整示例页面
    - login ：登录页面
    - user : 个人中心
  - request ：
    - index.js ：路由拦截
    - baseurl.js : 根据环境切换请求api
  - router ：路由文件
  - styles ： 公共样式
    - init.css ： 样式初始化
    - ele.css : element全局样式修改
  - utils ： 公共js
    - tablist.json ：导航栏数据结构
  - views ：
    - layout ： 页面整体布局
  -store ：vuex模块化

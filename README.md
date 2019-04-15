一个初始化的 react 项目搭建

## api 配置

### webpack

配置了个路径，支持全局默认路径：“@” 指向 `src` 目录

### react

版本：16.8.3

### react-router

#### config router 方式：

基础的 config 文件：`basicConfig.js`，用来写正常跳转的路径

例外的 config 文件：`accidentConfig.js`，用来写重定向，不存在正确路径等路由

### redux

默认根目录：`index.js`：用来合并 reducer ，对外抛出单独的一个 store

#### 公共目录：

更新数组：`updateItemArray.js`

更新对象：`updateObject.js`

#### 分页目录

每一个文件夹是一个界面 `pages` 目录对应页面的目录名，方便识别

目录内分 `dispatch.js`、`reducer.js`、`state.js`

## ui 配置

### common

放公共资源

### component

组件文件夹，方便各页面引用

### pages

页面文件夹，每一个文件夹下面还有当前页面的 `css`、`js`，公共的要放在 `common` 文件夹

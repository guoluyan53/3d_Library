# 智慧图书馆可视化

我们开发了基于大数据分析的高校图书馆智慧决策系统，系统通过图书馆大 数据分析及挖掘，将服务及管理信息梳理出来，让图书馆基本运行数据、读者数据、借阅数 据等，通过大数据实时统计与展示系统大屏可视化呈现，实现馆藏资源运行状况的集中展 示，为读者提供个性化内容推荐，让读者能直观、清晰、快捷获得所需服务项目；管理者更 可以从不同维度分析图书馆馆藏资源的使用情况，实现精准管理和预期管理，为图书馆的决 策、规划等提供更加科学的依据，减少图书资源的浪费。

## 技术栈   

- 前端使用 vue + axios + echarts + threejs 
  - 使用threejs来构建3d楼层模型，并实现楼层点击的动画效果
- 后端使用Python进行数据的清洗和处理

## 前端项目启动

安装依赖包、启动项目

```
npm install
```

```
npm run serve
```

```
npm run build
```

## 后端项目启动

这里使用的是本地的提供的接口。

- `SmartLibrary`为后台文件夹

跑一下 `main.py`就可以了。

![q2lvv.png](https://s2.loli.net/2022/05/13/M2au5zZhDEpYFmo.png)

## 目录结构

```
|-- 3d_Library
    |-- vue.config.js  //解决跨域
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- data                //数据文件夹，可忽略
    |   |   |-- bookpopo.json
    |   |   |-- json文件说明.txt
    |   |   |-- popo.json
    |   |-- static
    |       |-- lib
    |       |   |-- echarts.min.js
    |       |-- theme
    |           |-- chalk.js       //echart主题文件
    |-- src
        |-- App.vue
        |-- main.js
        |-- assets               //存放静态资源的文件，css、js、图片等
        |   |-- css
        |   |   |-- global.css
        |   |-- data             //页面的模拟数据，可忽略
        |   |   |-- book.js
        |   |   |-- borrow.js
        |   |   |-- category.js
        |   |   |-- change.js
        |   |   |-- enter.js
        |   |   |-- floor.js
        |   |   |-- radar.js
        |   |   |-- readertotal.js
        |   |   |-- readtotal.js
        |   |   |-- rolldata.js
        |   |-- image           //存放图片
        |   |-- js
        |   |   |-- ThreeJS_Composer.js      //threejs实现楼层切换
        |   |-- json
        |       |-- popo.json                //数据文件，可忽略
        |-- components                       //存放组件相关的文件夹
        |   |-- Analyse                      //学情分析页
        |   |   |-- Change.vue 				 
        |   |   |-- Radarcategory.vue
        |   |   |-- Readtotal.vue
        |   |-- Book                         //图书管理页
        |   |   |-- bookobj.vue
        |   |   |-- Dotted.vue
        |   |   |-- hotbook.vue
        |   |   |-- popo.vue
        |   |   |-- rose.vue
        |   |   |-- Top10.vue
        |   |-- Floor    					//楼层检测页
        |   |   |-- electory.vue
        |   |   |-- floorobj.vue
        |   |   |-- gauge.vue
        |   |   |-- sort.vue
        |   |-- Index                       //主页
        |   |   |-- Borrow.vue
        |   |   |-- Category.vue
        |   |   |-- Enter.vue
        |   |   |-- Recommend.vue
        |   |   |-- Rolldata.vue 
        |   |-- public                      //存放公共组件
        |       |-- nav.vue
        |-- router
        |   |-- index.js
        |-- store
        |   |-- index.js 
        |-- views                           //存放主视图文件夹
            |-- Analyse.vue                 //学情分析
            |-- Book.vue  					//图书管理
            |-- Floor.vue					//楼层检测
            |-- Index.vue 					//首页
            |-- Stacks.vue 					//暂时未开发

```

## 页面展示

### 首页

![image-20220513173627139](https://s2.loli.net/2022/05/13/7tpjgoXKuihBAfm.png)

### 楼层检测页

![image-20220513173642289](https://s2.loli.net/2022/05/13/CXBSGpM7vEZVhgD.png)

### 图书管理页

![image-20220513173652264](https://s2.loli.net/2022/05/13/lkfjOTh8YoIwmpc.png)

### 学情分析页

![image-20220513173700252](https://s2.loli.net/2022/05/13/wISZKlxbJ3UGMO6.png)

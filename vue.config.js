module.exports = {
    publicPath: './',
    // 相对路径，这样打包出的包可以被部署在任意路径
    //当使用基于html5中history.pushState的路由或者使用pages选项构建多页面应用时要避免使用相对publicPath
    indexPath: 'index.html',
    outputDir: 'dist',
    assetsDir: 'static', // 放置生成的静态资源(js、 css、 img、 fonts) 的(相对于 outputDir 的) 目录。
    lintOnSave: true, // 保存时是否用eslint-loader来检查代码
    productionSourceMap: false, // 生产环境下是否需要source-map
    devServer: {
      overlay: { // 让浏览器overlay同时提示警告和错误
        warnings: true,
        errors: true
      },
      open: true, // 自动启动浏览器
      proxy: { // 配置多个跨域
        "/api": { // 取名任意
          target: `http://127.0.0.1:5000`, // 后端给的服务器地址
          changeOrigin: true, // 发送请求头中host会设置成target，即是否允许跨域
          secure: false, // 如果是https，需要配置该参数
          pathRewrite: {
            "^/api": "" // 与前面名称保持一致
          }
        }
      }
    }
  }
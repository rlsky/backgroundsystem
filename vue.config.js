module.exports = {
  css: {
    loaderOptions: {
      sass: {
        //依次导入的公用的scss变量，公用的scss混入，公用的默认样式
        prependData: `
          @import "~@/assets/scss/variable.scss";
          @import "~@/assets/scss/mixin.scss";
        `
      }
    }
  },
  // 默认: '/'，代表绝对路径，该值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径。
  publicPath:"/",
  // 打包后输出的文件名称，默认为'dist'
  outputDir:"dist",
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径，默认'index.html'。
  indexPath:"index.html",
  // 放置生成的静态资源 (js、css、img、fonts) 的目录，相对于 outputDir，默认为''。
  assetsDir:"static",
  // 是否使用hash命名文件，默认是true
  filenameHashing:true,
  // 是否在保存的时候使用 `eslint-loader` 进行检查, 默认false。
  lintOnSave:false,
  devServer:{
    port: 3050,
    host: '0.0.0.0',
    // 新版的webpack-dev-server出于安全考虑，默认检查hostname，如果hostname不是配置内的，将中断访问。
    // nodejs项目在本地访问正常，然而部署到服务器上就提示Invalid Host header。
    // 内网穿透也需要改为true
    disableHostCheck:true,
    proxy: {
      // 只要是'/bs'开头的才用代理
      '/bs': {
        // 代理到http://api.k780.com/
        target: 'http://api.k780.com/',
        secure: false, // 如果是https接口，需要配置这个参数
        ws: true, // 如果要代理 websockets，配置这个参数
        changeOrigin: true, // 是否跨域
        // 重写路径, 真正请求接口时需要正确地址http://api.k780.com/，所以要将/bs替换为''
        pathRewrite: {
          '^/bs': ''
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {

  }

}
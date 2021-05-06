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
  publicPath:"./",
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
    proxy: {
      '/bs': {
        target: 'http://api.k780.com/',
        secure: false,
        ws: true,
        changeOrigin: true,
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
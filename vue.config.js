module.exports = {
  
    // devServer: {
    //     host: '0.0.0.0',
    //     port: 8080,
    //     https: false,
    //     hotOnly: false,
    //     proxy: {
    //         '/api': {
    //             target: 'http://jysggzy.jieyang.gov.cn',
    //             changeOrigin: true
    //         }
    //     }
    // },
    css: {
        /*为预处理器 loader 传递自定义选项*/
        loaderOptions: {
            sass: {
                data: `@import "@/css/_main.scss";`
            }
        }
    },

}
// devServer: {
//     // Paths
//      assetsSubDirectory: 'static',
//      assetsPublicPath: '/',
//      proxyTable: {
//          '/api': {
//              target: 'http://jysggzy.jieyang.gov.cn',
//              changeOrigin: true, //改变源
//              pathRewrite: {
//                  '^/api': 'http://jysggzy.jieyang.gov.cn'
//              }
//          }
//      },

//      // Various Dev Server settings
//      host: '192.168.1.164',  // can be overwritten by process.env.HOST
//      port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
//      autoOpenBrowser: false,
//      errorOverlay: true,
//      notifyOnErrors: true,
//      poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


//      /**
//       * Source Maps
//       */

//      // https://webpack.js.org/configuration/devtool/#development
//      devtool: 'cheap-module-eval-source-map',

//      // If you have problems debugging vue-files in devtools,
//      // set this to false - it *may* help
//      // https://vue-loader.vuejs.org/en/options.html#cachebusting
//      cacheBusting: true,

//      cssSourceMap: true
//  },
//配置路径别名
module.exports = {
  //修改文件路径
  publicPath: './',
  //声明配置webpack
  configureWebpack: {
    resolve: {
      //配置路径别名
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'api': '@/api',
        'utils': '@/utils',
        'config': '@/config'
      }
    }
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'https://www.xxx.api',  // 后台接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite:{
                '^/api':''
            }
        }
    }
  }
}
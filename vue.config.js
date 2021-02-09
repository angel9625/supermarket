
module.exports = {
  
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  //配置全局scss样式
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/assets/styles/style.scss";`
			}
		}
	}

}

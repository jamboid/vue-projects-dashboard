module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/base/_all.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
};

var packageConfig = require('./package.json');
var proxyConfig = require('./src/home/constants/proxyConfig')
module.exports = function (configs) {
  configs = Object.assign({}, configs, {
    name: packageConfig.name,
    defaultPort: 8006,
    disableEslint: true,
    chunkhash: true,
    devServer: Object.assign({},
      configs.devServer, {
        proxy: proxyConfig
      }),
    apps: ['home'],
    webpack: {
      dllConfig: {
        vendors: ['vue/dist/vue.esm.js', 'vue-router', 'vuex', 'vue-class-component']
      },
      happypack: true
    },
    htmlWebpackPlugin: {
      title: "webapp",
    },
    babel: {
      include: []
    }
  });
  return configs;
};

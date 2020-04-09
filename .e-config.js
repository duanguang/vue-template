var packageConfig=require('./package.json');
var proxyConfig=require('./src/home/constants/proxyConfig')
module.exports = function (configs) {
    configs = Object.assign({}, configs, {
        name: packageConfig.name,
        defaultPort: 8006,
        disableEslint:false,
        chunkhash:true,
        projectType:'ts',
        devServer: Object.assign({},
            configs.devServer,
            {
                 proxy:proxyConfig
            }),
        apps: ['home'],
        webpack: {
            dllConfig: {
                vendors: ['vue/dist/vue.esm.js','vue-router','vuex','axios']
            },
            happypack:true
        },
        htmlWebpackPlugin: {
            title: "vue-typescript",
        },
        babel:{
            include:[]
        }
    });
    return configs;
};


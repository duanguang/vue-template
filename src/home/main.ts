// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
//  import { Button, Input, Poptip } from 'iview';
import '!style-loader!css-loader!less-loader!./theme/index.less'
import '../../node_modules/ant-design-vue/dist/antd.min.css'
import './theme/base.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    store,
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});

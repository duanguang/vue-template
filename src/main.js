// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index';
import {Button,Input,Poptip} from 'iview';
import '!style-loader!css-loader!less-loader!./theme/index.less';
import './theme/base.css';
import { HttpConfig } from './constants/httpConfig';
Vue.config.productionTip = false;

/* eslint-disable no-new */
import {InitPlugin,AuthPlugin} from 'bgood-widget/lib/utils/plugin'

Vue.component(Button.name,Button);
Vue.component(Input.name,Input);
Vue.component(Poptip.name,Poptip);
Vue.use(InitPlugin)
if(process.env.NODE_ENV!=='development'){
  Vue.use(AuthPlugin,{url:`${HttpConfig.domainGateWay}/auth`})
}
function setDomain(){
  if(process.env.NODE_ENV!=='development'){
   document.domain = "banggood.cn";
  }
}
setDomain();
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

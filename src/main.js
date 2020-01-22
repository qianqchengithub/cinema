import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Scroller from './components/Scroller'
Vue.component('Scroller', Scroller);

import { Dialog } from 'vant';
import 'vant/lib/dialog/style';
Vue.use(Dialog);

import Loading from './components/Loading'
Vue.component('Loading', Loading);
Vue.filter("setWH",(url,arg) => {
  return url.replace(/w\.h/, arg)
})

import {
  post,
  get,
  patch,
  put,
  deleted,
  all
} from '@/axios' // 加入axios接口请求用法
Vue.prototype.$post  = post;
Vue.prototype.$get   = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put   = put;
Vue.prototype.$deleted = deleted;
Vue.prototype.$all = all;


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

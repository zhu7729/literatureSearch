import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;

Vue.use(ElementUI, { size: 'default', zIndex: 3000 });
Vue.config.productionTip = false;

import * as filters from './filters/index';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});


import moment from 'moment';
Vue.filter('time', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  return moment.unix(value).format(formatString);
});
Vue.filter('day', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD';
  return moment.unix(value).format(formatString);
});

router.beforeEach((to,from,next) => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

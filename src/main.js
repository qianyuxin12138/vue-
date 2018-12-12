import Vue from 'vue';
import App from './App.vue';
import router from './router';


//引入UI组件
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import store from './store/index';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
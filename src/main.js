import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './store';
// global styles
import './styles.css';
// plugin modules
import { Layout, Icon, Menu } from 'ant-design-vue';
// custom directives
import './directives/highlight';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.log('this will execute all the time');
  next(); // this is very important, if we didn't execute next() then routing will not continue
});

// register library modules with Vue
Vue.use(Router);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);

// Vue App Instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

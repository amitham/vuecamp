import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// custome directives
import highlight from './directives/highlight';


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('this will execute all the time');
  next(); // this is very important, if we didn't execute next() then routing will not continue
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

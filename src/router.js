import Vue from 'vue';
import Router from 'vue-router';
import Start from './components/features/start/Start.vue';
import DOMInteract from './components/features/domInteract/DOMInteract.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/interact',
      name: 'DOMinteract',
      component: DOMInteract
    }
  ]
})

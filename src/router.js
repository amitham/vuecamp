import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/features/start/Start.vue'
import DOMInteract from './components/features/domInteract/DOMInteract.vue'
import Routing from './components/features/routing/Routing.vue'
import UserStart from './components/features/routing/user/userStart.vue'
import UserDetail from './components/features/routing/user/userDetail.vue'
import UserEdit from './components/features/routing/user/userEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'start', component: Start },
    { path: '/interact', name: 'DOMinteract', component: DOMInteract },
    {
      path: '/routing', name: 'routing', component: Routing, children: [
        {
          path: ':user', name: 'user', component: UserStart, children: [
            { path: ':detail', component: UserDetail },
            { path: ':edit', component: UserEdit }
          ]
        }
      ]
    },
  ]
})

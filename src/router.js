import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/features/start/Start.vue'
import DOMInteract from './components/features/domInteract/DOMInteract.vue'
import Routing from './components/features/routing/Routing.vue'
import User from './components/features/routing/user/user.vue';
import AllUsers from './components/features/routing/user/allUsers.vue'
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
          path: ':user', component: User, children: [
            { path: '', component: AllUsers },
            { path: 'all', component: AllUsers },
            { path: ':id/detail', component: UserDetail },
            { path: ':id/edit', component: UserEdit }
          ]
        }
      ]
    },
  ]
})

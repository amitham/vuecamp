import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/features/start/Start.vue'
import Directive from './components/features/directive/Directive.vue'
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
    { path: '/directive', name: 'directive', component: Directive },
    {
      path: '/routing', name: 'routing', component: Routing, children: [
        {
          path: ':user', component: User, children: [
            { path: '', component: AllUsers },
            { path: 'all', component: AllUsers, beforeEnter: (to, from, next) => {
              console.log('this only execute when "user/all" routing execute')
              next()
            }},
            { path: ':id/detail', component: UserDetail },
            { path: ':id/edit', component: UserEdit }
          ]
        }
      ]
    },
  ]
})

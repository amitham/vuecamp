import Router from 'vue-router';
import GettingStarted from './views/getting-started/Getting-Started';
import Methods from './views/methods/Methods';
import ComputedProperties from './views/computed-properties/Computed-Properties';
import Directives from './views/directives/Directives';
import Routing from './views/routing/Routing';
import User from './components/features/routing/user/User';
import AllUsers from './components/features/routing/user/All-Users';
import UserDetail from './components/features/routing/user/User-Detail';
import UserEdit from './components/features/routing/user/User-Edit';
import Filters from './views/filters/Filters';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'start', component: GettingStarted },
    { path: '/methods', name: 'methods', component: Methods },
    { path: '/computedProperties', name: 'computedProperties', component: ComputedProperties },
    { path: '/directive', name: 'directive', component: Directives },
    {
      path: '/routing',
      name: 'routing',
      component: Routing,
      children: [
        {
          path: ':user',
          component: User,
          children: [
            { path: '', name: 'users', component: AllUsers },
            { path: 'all',
              name: 'allUsers',
              component: AllUsers,
              beforeEnter: (to, from, next) => {
                console.log('this only execute when "user/all" routing execute');
                next();
              }
            },
            { path: ':id/detail', name: 'userDetails', component: UserDetail },
            { path: ':id/edit', name: 'userEdit', component: UserEdit }
          ]
        }
      ]
    },
    { path: '/filters', name: 'filters', component: Filters }
  ]
});

// router watcher
router.beforeEach((to, from, next) => {
  console.log('this will execute all the time');
  next(); // this is very important, if we didn't execute next() then routing will not continue
});

export default router;

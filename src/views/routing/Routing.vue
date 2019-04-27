<template>
  <a-layout class="app-content">
    <h1>Routing</h1>
    <hr class="app-hr"/>
    <br>
    <p>
      Though user feel navigate from one page to another, in single page application everything load inside a one file
      (index.html).
      To simulate this behaviour we use routing. It does change part of the url and load the relavent content inside the
      index.html file.
    </p>
    <p>
      "vue-router" is a third party package that we need to install separately. "npm install --save vue-router" command
      will download and install it into the project.
      <strong>
        And the other important thing is vue-router should configure
        in the root vue instanse.
      </strong>
    </p>

    <br>
    <hr>
    <ul id="nav" class="nav nav-pills">
      <router-link tag="li" to="/routing/user" class="nav-link" style="cursor: pointer">
        <button type="button" class="btn btn-primary">Demo</button>
      </router-link>
    </ul>

    <router-view></router-view>
    <br>
    <hr>

    <p>There are few things that we need to know when we are working with routing in vuejs (front-end development)</p>
    <ul>
      <li>What is necessary for router to work</li>
      <ol>
        <li>To use vue router, we need to install "vue-router" package(if it is not install when we create the project
          using vue CLI).
        </li>
        <li>Need to register the "vue router" package with the application</li>
        <li>There should be "router-view" tag define in the template(components will load inside this element)</li>
      </ol>

      <li>How to define child routes</li>
      <div class="mg-25">
        <p>When we create a router instance(calling the contructor method of the router class) can pass number of
          parameters,
          mode, baseurl, routes(array of objects). Single route object has in-build properties that we can use to define
          what
          component should load in a define path.</p>
        <div class="pre code">{ path: ':user', component: User, children: [{ path: '', component: AllUsers }]</div>
        <p>can use the property called "children" to define child routes </p>
      </div>

      <li>How to use links for routing</li>
      <p class="mg-25">Tag name: router-link, attribute name: to ex. to="/routing/user/3/edit"</p>

      <li>How to use router params</li>
      <p class="mg-25">Can get router params by using following line fo code. "$route.params.id" id is the param name
        that we define in
        the route object</p>

      <li>What is eager loading and lazy loading</li>
      <ul>
        <li>Eager loading: Load everything all the time</li>
        <li>Lazy loading: Only load part of the application when it is necessary</li>
        <li>When we use import statment in a file, those imported file's content will be included in the bundle.js
          no matter whether we use it or not
        </li>
        <li>Firt remove the import statments, then before we add router component, create a const variable to
          load component when it is require
        </li>
      </ul>
      <div class="pre code">
        const User = resolve = {
        require.ensure(['./../routing/user/user.vue'], () => {
        resolve(require('./../routing/user/user'))
        }, 'user') <span class="comment"><b>// can add a group name like "user" to group related routes</b></span>
        }

        * did the same for below example
      </div>

      <li>Protecting routes with guards</li>
      <ul>
        <li>Globally:</li>
        <div class="pre code">
          import Vue from 'vue'
          import App from './App.vue'
          import router from './router'
          import store from './store'

          Vue.config.productionTip = false

          router.beforeEach((to, from, next) => {
          console.log('this will execute all the time');
          next(); <span class="comment"><b>// this is very important, if we didn't execute next() then routing will not continue</b></span>
          })

          new Vue({
          router,
          store,
          render: h => h(App)
          }).$mount('#app')
        </div>

        <li>Inside a router:</li>
        <div class="pre code">
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
          <span class="comment"><b>// same as the global. make sure add next()</b></span>
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
        </div>
      </ul>
    </ul>

    <p>Example:</p>
    <br>
    <p>Create separate file for routing</p>
    <div class="pre code">
      <div class="right">router.js</div>
      <span class="comment"><b>// import all the necessary files</b></span>
      import Vue from 'vue'
      import Router from 'vue-router'
      import Start from './components/features/start/Start.vue'
      import DOMInteract from './components/features/domInteract/DOMInteract.vue'
      import Routing from './components/features/routing/Routing.vue'
      // import User from './components/features/routing/user/user.vue';
      import AllUsers from './components/features/routing/user/allUsers.vue'
      import UserDetail from './components/features/routing/user/userDetail.vue'
      import UserEdit from './components/features/routing/user/userEdit.vue'

      <span class="comment"><b>// using lazy loading</b></span>
      const User = resolve = {
      require.ensure(['./../routing/user/user.vue'], () => {
      resolve(require('./../routing/user/user'))
      }, 'user') <span class="comment"><b>// can add a group name like "user" to group related routes</b></span>
      }

      Vue.use(Router) <span class="comment"><b>// register vue router with the application</b></span>

      export default new Router({
      mode: 'history', <span class="comment"><b>// default mode is hash, if didn't mention the mode it will use the default</b></span>
      base: process.env.BASE_URL,
      routes: [
      { path: '/', name: 'start', component: Start },
      { path: '/interact', name: 'DOMinteract', component: DOMInteract },
      {
      <span class="comment"><b>// how to define child routing</b></span>
      path: '/routing', name: 'routing', component: Routing, children: [
      { path: ':user', component: User, children: [
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
    </div>

    <br>
    <p>Register the routing with application</p>
    <div class="pre code">
      <div class="right">main.js</div>
      import Vue from 'vue'
      import App from './App.vue'
      import router from './router'
      import store from './store'

      Vue.config.productionTip = false

      new Vue({
      router,
      store,
      render: h => h(App)
      }).$mount('#app')
    </div>

    <br>
    <p>How to use a button to change the route</p>
    <div class="pre code">
      <!-- <div class="right">main.js</div> -->
      export default {
      methods: {
      goback() {
      this.$router.push({ path: "/routing" });
      }
      }
      };
    </div>

    <br>
  </a-layout>
</template>

<script>
export default {};
</script>

<style scoped>
  #nav {
    display: flex !important;
  }

  .pre {
    font-family: "Roboto Mono", Monaco, courier, monospace;
    font-size: 0.8em;
    background-color: #f8f8f8;
    -webkit-font-smoothing: initial;
    -moz-osx-font-smoothing: initial;
    border-radius: 2px;
    position: relative;
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0px;
  }

  .code {
    overflow-x: auto;
    color: #525252;
    white-space: pre;
    padding: 1.2em 1.4em;
    line-height: 1.5em;
    font-size: 1em;
    display: block;
    margin: 0 2px;
    border-radius: 2px;
  }

  .comment {
    color: green;
  }

  .right {
    float: right;
  }

  .mg-25 {
    margin-left: 25px;
  }
</style>

<template>
  <a-layout class="app-content">
    <h1>Routing</h1>
    <hr class="app-hr"/>
    <p>
      Though user feel navigate from one page to another, in single page application everything load inside a one file
      (index.html). To simulate this behaviour we use routing. It does change part of the url and load the relavent
      content inside the index.html file.
    </p>
    <p>
      <b>"vue-router"</b> is a third party package that we need to install separately. <b>"npm install --save
      vue-router"</b> command will download and install it into the project. <b>And the other important thing is
      vue-router should configure in the root vue instanse.</b>
    </p>
    <ul class="list">
      <router-link tag="li" to="/routing/user" class="list-item">
        <a-button type="primary" size="large">
          <a-icon type="play-circle"/>
          Demo
        </a-button>
      </router-link>
    </ul>
    <h4>Preview :</h4>
    <div class="router-preview">
      <router-view></router-view>
    </div>
    <hr class="app-hr mt-25"/>
    <h3>There are few things that we need to know when we are working with routing in vuejs (front-end development)</h3>
    <ul class="list">
      <li><b>What is necessary for router to work</b></li>
      <ol class="pl-15">
        <li>To use vue router, we need to install "vue-router" package (if it is not install when we create the project
          using vue CLI).
        </li>
        <li>Need to register the "vue router" package with the application</li>
        <li>There should be "router-view" tag define in the template(components will load inside this element)</li>
      </ol>
      <li class="mt-15"><b>How to define child routes</b></li>
      <li>
        <p>When we create a router instance(calling the contructor method of the router class) can pass number of
          parameters, mode, baseurl, routes(array of objects). Single route object has in-build properties that we can
          use to define what component should load in a define path.</p>
        <div class="preview-con">
          <div class="hang-right"><span>JS</span></div>
          <prism-editor :code="exampleOne" language="js" :readonly="true"></prism-editor>
        </div>
        <p>can use the property called "children" to define child routes </p>
      </li>
      <li><b>How to use links for routing</b></li>
      <li>
        <ul class="pl-18">
          <li>Tag name : <b>router-link</b></li>
          <li>Attribute name : <b>to</b> (example => to="/routing/user/3/edit")</li>
        </ul>
      </li>
      <li class="mt-15"><b>How to use router params</b></li>
      <li>
        <p>Can get router params by using following line of code. <b>"$route.params.id"</b>, id is the param name that
          we define
          in the route object.</p>
      </li>
      <li><h2>What is eager loading and lazy loading</h2></li>
      <li>
        <ul class="pl-18">
          <li><b>Eager loading</b> : Load everything all the time</li>
          <li><b>Lazy loading</b> : Only load part of the application when it is necessary</li>
          <li>When we use import statement in a file, those imported file's content will be included in the bundle.js no
            matter whether we use it or not.
          </li>
          <li>First remove the import statements, then before we add router component, create a const variable to load
            component when it is require.
          </li>
        </ul>
      </li>
      <li class="mt-15">
        <div class="preview-con">
          <div class="hang-right"><span>JS</span></div>
          <prism-editor :code="exampleTwo" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-25"><h2>Protecting routes with guards</h2></li>
      <li>
        <ul class="pl-18">
          <li>
            <b>Globally</b> :
            <div class="preview-con">
              <div class="hang-right"><span>main.js</span></div>
              <prism-editor :code="exampleThree" language="js" :readonly="true"></prism-editor>
            </div>
          </li>
          <li>
            <b>Inside a router</b> :
            <div class="preview-con">
              <div class="hang-right"><span>router.js</span></div>
              <prism-editor :code="exampleFour" language="js" :readonly="true"></prism-editor>
            </div>
          </li>
        </ul>
      </li>
      <li class="mt-25"><hr class="app-hr"/></li>
      <li class="mt-15"><h1>Example :</h1></li>
      <li><h3>Create separate file for routing</h3></li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>router.js</span></div>
          <prism-editor :code="exampleFive" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li><h3>Register the routing with application</h3></li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>main.js</span></div>
          <prism-editor :code="exampleThree" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li><h3>How to use a button to change the route</h3></li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>JS</span></div>
          <prism-editor :code="exampleSix" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
    </ul>
  </a-layout>
</template>

<script>
import PrismEditor from 'vue-prism-editor';

export default {
  components: {
    PrismEditor
  },
  data () {
    return {
      exampleOne: '{ path: \':user\', component: User, children: [{ path: \'\', component: AllUsers }] }',
      exampleTwo: 'const User = resolve = {\n' +
          '  require.ensure([\'./../routing/user/user.vue\'], () => {\n' +
          '    resolve(require(\'./../routing/user/user\'))\n' +
          '  } , \'user\'); \n' +
          '  // can add a group name like "user" to group related routes\n' +
          '}',
      exampleThree: 'import Vue from \'vue\';\n' +
          'import App from \'./App.vue\'\n' +
          'import router from \'./router\'\n' +
          'import store from \'./store\'\n' +
          '\n' +
          'Vue.config.productionTip = false;\n' +
          '\n' +
          'router.beforeEach((to, from, next) => {\n' +
          '  console.log(\'this will execute all the time\');\n' +
          '  next(); // this is very important, if we didn\'t execute next() then routing will not continue\n' +
          '});\n' +
          '\n' +
          'new Vue({\n' +
          '  router,\n' +
          '  store,\n' +
          '  render: h => h(App)\n' +
          '}).$mount(\'#app\');',
      exampleFour: 'export default new Router({\n' +
          '  mode: \'history\',\n' +
          '  base: process.env.BASE_URL,\n' +
          '  routes: [\n' +
          '    {path: \'/\', name: \'start\', component: Start},\n' +
          '    {path: \'/interact\', name: \'DOMinteract\', component: DOMInteract},\n' +
          '    {\n' +
          '      path: \'/routing\', name: \'routing\', component: Routing, children: [\n' +
          '        {\n' +
          '          path: \':user\', component: User, children: [\n' +
          '            {path: \'\', component: AllUsers},\n' +
          '            // same as the global. make sure add next()\n' +
          '            {\n' +
          '              path: \'all\', component: AllUsers, beforeEnter: (to, from, next) => {\n' +
          '                console.log(\'this only execute when "user/all" routing execute\');\n' +
          '                next();\n' +
          '              }\n' +
          '            },\n' +
          '            {path: \':id/detail\', component: UserDetail},\n' +
          '            {path: \':id/edit\', component: UserEdit}\n' +
          '          ]\n' +
          '        }\n' +
          '      ]\n' +
          '    },\n' +
          '  ]\n' +
          '})',
      exampleFive: 'import Router from \'vue-router\';\n' +
          'import GettingStarted from \'./views/getting-started/Getting-Started\';\n' +
          'import Directives from \'./views/directives/Directives\';\n' +
          'import Routing from \'./views/routing/Routing\';\n' +
          'import User from \'./components/features/routing/user/User\';\n' +
          'import AllUsers from \'./components/features/routing/user/All-Users\';\n' +
          'import UserDetail from \'./components/features/routing/user/User-Detail\';\n' +
          'import UserEdit from \'./components/features/routing/user/User-Edit\';\n' +
          '\n' +
          'export default new Router({\n' +
          '  mode: \'history\',\n' +
          '  base: process.env.BASE_URL,\n' +
          '  routes: [\n' +
          '    { path: \'/\', name: \'start\', component: GettingStarted },\n' +
          '    { path: \'/directive\', name: \'directive\', component: Directives },\n' +
          '    {\n' +
          '      path: \'/routing\',\n' +
          '      name: \'routing\',\n' +
          '      component: Routing,\n' +
          '      children: [\n' +
          '        {\n' +
          '          path: \':user\',\n' +
          '          component: User,\n' +
          '          children: [\n' +
          '            { path: \'\', component: AllUsers },\n' +
          '            { path: \'all\',\n' +
          '              component: AllUsers,\n' +
          '              beforeEnter: (to, from, next) => {\n' +
          '                console.log(\'this only execute when "user/all" routing execute\');\n' +
          '                next();\n' +
          '              } },\n' +
          '            { path: \':id/detail\', component: UserDetail },\n' +
          '            { path: \':id/edit\', component: UserEdit }\n' +
          '          ]\n' +
          '        }\n' +
          '      ]\n' +
          '    }\n' +
          '  ]\n' +
          '});\n',
      exampleSix: 'export default {\n' +
          '  methods: {\n' +
          '    goback() {\n' +
          '      this.$router.push({ path: "/routing" });\n' +
          '    }\n' +
          '  }\n' +
          '};'
    };
  }
};
</script>

<style scoped>
  .list {
    list-style: none;
    padding-left: 0;
  }

  .list-item {
    display: contents;
  }

  .router-preview {
    box-shadow: 0 0 10px #d8d8d8;
    border-radius: 5px;
    padding: 15px;
    background: #e6f7ff;
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

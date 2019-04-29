<template>
  <a-layout class="app-content">
    <h1>Vuex</h1>
    <hr class="app-hr"/>
    <ul class="list">
      <li>Vuex is the official state management library for <a href="https://vuex.vuejs.org/" target="_blank">Vue.js</a>.
        Its job is to share data across the components of your application.
      </li>
      <li>Components in Vue.js out of the box can communicate using
        <ul class="pl-18">
          <li><b>props</b> : to pass state down to child components from a parent</li>
          <li><b>events</b> : to change the state of a parent component from a child, or using the root component as an
            event bus
          </li>
        </ul>
      </li>
      <li><img class="preview-image" :src="`${publicPath}images/vuex-components.png`"/></li>
      <li>Sometimes things get more complex than what these simple options allow. In this case, a good
        option is to
        centralize the state in a single store. This is what Vuex does.
      </li>
      <li class="mt-15"><h2>Why should you use Vuex ?</h2></li>
      <li>Vuex is not the only state management option you can use in Vue (you can use Redux too), but its main
        advantage is that it's official, and its integration with Vue.js is what makes it shine. With React you have the
        trouble of having to choose one of the many libraries available, as the ecosystem is huge and has no de-facto
        standard. Lately Redux was the most popular choice, with MobX following up in terms of popularity. Vuex borrowed
        many of its ideas from the React ecosystem, as this is the Flux pattern popularized by Redux.
      </li>
      <li class="mt-15">Components in a Vue application can have their own state. For example, an input box will store
        the data
        entered into it locally. This is perfectly fine, and components can have local state even when using Vuex. You
        know that you need something like Vuex when you start doing a lot of work to pass a piece of state around.
      </li>
      <li class="mt-15">In this case Vuex provides a central repository store for the state, and you mutate the state by
        asking the store to do that. Every component that depends on a particular piece of the state will access it
        using a getter on the store, which makes sure it's updated as soon as that thing changes. Using Vuex will
        introduce some complexity into the application, as things need to be set up in a certain way to work correctly,
        but if this helps solve the unorganized props passing and event system that might grow into a spaghetti mess if
        too complicated.
      </li>
      <li class="mt-15"><h3 class="mb-0">- Vuex in Motion -</h3></li>
      <li><img class="preview-image" :src="`${publicPath}images/vuex-in-motion.gif`"/></li>
      <li><h2>State management terminology</h2></li>
      <li>In short: your state is stored in an object called the store. To modify the state you use actions and
        mutations, which are also stored in the store.
      </li>
      <li>
        <ul class="pl-18">
          <li><b>Store</b> : Manages the state. It should only be mutated from within, so outside components can not
            directly modify the state. To mutate the state, components can dispatch an action or commit a mutation.
          </li>
          <li><b>State</b> : Is the data stored in your application. You components can "receive" this data and when it
            changes your component will update itself.
          </li>
          <li><b>Getters</b> : Compute properties based on the store state. You can use these in your actions or
            directly in your component. This is useful if several components need to calculate the same thing based on
            the store data, you can do it in one place instead of having to do it separately for each component.
          </li>
          <li><b>Actions</b> : Contains business logic and it does not care about updating the state directly. The
            reason is that actions are asynchronous (your code can continue to run even if the action is not finished
            yet), this is useful if you need to wait to receive data from an API for example. An action will dispatch a
            mutation, which will directly update the state.
          </li>
          <li><b>Mutations</b> : To update a state you will need to commit a mutation. A mutation does not care about
            business logic, it’s only purpose is updating the state. A mutation is synchronous (your code has to wait
            until the mutation is done). Mutations should be the only way used to update your state, to keep your state
            management predictable.
          </li>
        </ul>
      </li>
      <li class="mt-15">boilerplate of the <b>store.js</b></li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>store.js</span></div>
          <prism-editor :code="exampleOne" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-25">
        <hr class="app-hr"/>
      </li>
      <li><h2>Create the Vuex store</h2></li>
      <li>This file can be put anywhere. It's generally suggested to put it in the <b>src/store/store.js</b> file.</li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>store.js</span></div>
          <prism-editor :code="exampleTwo" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-15">In this file we initialize Vuex and we tell Vue to use it :</li>
      <li><p>We export a Vuex store object, which we create using the <b>Vuex.Store()</b> API.</p></li>
      <li>update the <b>src/main.js</b> file like this.</li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>main.js</span></div>
          <prism-editor :code="exampleThree" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li>in store consuming <b>components/features/vuex/VuexComponent.vue</b> template and script</li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>VuexComponent.vue</span></div>
          <prism-editor :code="exampleFour" language="html" :readonly="true"></prism-editor>
        </div>
      </li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>VuexComponent.vue</span></div>
          <prism-editor :code="exampleFive" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-25">
        <hr class="app-hr"/>
      </li>
      <li><h2>Preview</h2></li>
      <li>
        <div class="vuex-preview"><VuexComponent></VuexComponent></div>
      </li>
    </ul>
  </a-layout>
</template>

<script>
import PrismEditor from 'vue-prism-editor';
import VuexComponent from '../../components/features/vuex/VuexComponent';

export default {
  name: 'Vuex',
  components: {
    PrismEditor,
    VuexComponent
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      exampleOne: 'import Vue from \'vue\';\n' +
          'import Vuex from \'vuex\';\n' +
          '\n' +
          'Vue.use(Vuex);\n' +
          '\n' +
          'export const store = new Vuex.Store({\n' +
          '  state: {\n' +
          '    // ...\n' +
          '  },\n' +
          '  getters: {\n' +
          '    // ...\n' +
          '  },\n' +
          '  mutations: {\n' +
          '    // ...\n' +
          '  },\n' +
          '  actions: {\n' +
          '    // ...\n' +
          '  }\n' +
          '});',
      exampleTwo: 'export default new Vuex.Store({\n' +
        '  state: {\n' +
        '    totalCount: 10\n' +
        '  },\n' +
        '  getters: {\n' +
        '    checkTotalCount: state => {\n' +
        '      return state.totalCount > 0;\n' +
        '    }\n' +
        '  },\n' +
        '  mutations: {\n' +
        '    add (state, amount) {\n' +
        '      state.totalCount += amount;\n' +
        '    },\n' +
        '    deduct (state, amount) {\n' +
        '      state.totalCount -= amount;\n' +
        '    }\n' +
        '  },\n' +
        '  actions: {\n' +
        '    add (context, amount) {\n' +
        '      context.commit(\'add\', amount);\n' +
        '    },\n' +
        '    deduct (context, amount) {\n' +
        '      if (context.state.totalCount >= amount) {\n' +
        '        context.commit(\'deduct\', amount);\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '});',
      exampleThree: 'import Vue from \'vue\'\n' +
          'import App from \'./App.vue\'\n' +
          'import store from \'./store/store\'\n' +
          '\n' +
          'Vue.config.productionTip = false;\n' +
          '\n' +
          'new Vue({\n' +
          '  store,\n' +
          '  render: h => h(App),\n' +
          '}).$mount(\'#app\');',
      exampleFour: '<template>\n' +
        '  <div>\n' +
        '    <p><b>TotalCount : {{ totalCount }}</b></p>\n' +
        '    <p v-show="countStatus" class="green">Count is more that 2</p>\n' +
        '    <p v-show="totalCount <= 2" class="red">Count is less that or equal to 2</p>\n' +
        '    <a-input placeholder="Enter Amount" v-model.number="inputValue" class="input"/>\n' +
        '    <br/>\n' +
        '    <a-button type="primary" @click="add">\n' +
        '      Add\n' +
        '    </a-button>\n' +
        '    &nbsp;\n' +
        '    <a-button type="primary" :disabled="totalCount <= 0" @click="deduct">\n' +
        '      Deduct\n' +
        '    </a-button>\n' +
        '  </div>\n' +
        '</template>',
      exampleFive: 'export default {\n' +
        '  name: \'VuexComponent\',\n' +
        '  data () {\n' +
        '    return {\n' +
        '      inputValue: 1\n' +
        '    };\n' +
        '  },\n' +
        '  computed: {\n' +
        '    totalCount () {\n' +
        '      return this.$store.state.totalCount;\n' +
        '    },\n' +
        '    countStatus () {\n' +
        '      return this.$store.getters.checkTotalCount;\n' +
        '    }\n' +
        '  },\n' +
        '  methods: {\n' +
        '    add () {\n' +
        '      // Dispatch the action to add\n' +
        '      this.$store.dispatch(\'add\', this.inputValue);\n' +
        '    },\n' +
        '    deduct () {\n' +
        '      // Dispatch the action to deduct\n' +
        '      this.$store.dispatch(\'deduct\', this.inputValue);\n' +
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

  .preview-image {
    width: 700px;
    padding: 10px;
    background: #ddd;
    border-radius: 5px;
    margin: 20px 0;
    box-shadow: 0 0 10px #ddd;
  }

  .vuex-preview {
    box-shadow: 0 0 10px #d8d8d8;
    border-radius: 5px;
    padding: 15px;
    background: #e6f7ff;
  }
</style>

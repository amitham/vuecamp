<template>
  <a-layout class="app-content">
    <h1>Methods</h1>
    <hr class="app-hr"/>
    <ul class="list">
      <li>
        <h2>What are Vue Methods ?</h2>
        <p>A Vue method is a function associated with the Vue instance. Methods are defined inside the `methods`
          property.</p>
      </li>
      <li>
        <h3>Methods are defined inside the methods property :</h3>
      </li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>JS</span></div>
          <prism-editor :code="exampleOne" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li><h3>or</h3></li>
      <li>
        <h3>In Single File Components :</h3>
      </li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>JS</span></div>
          <prism-editor :code="exampleTwo" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-25">
        <hr class="app-hr"/>
      </li>
      <li class="mt-15">Methods are especially useful when you need to perform an action and you attach a <b>v-on</b>
        directive on an
        element to handle events. Like this one, which calls <b>handleClick</b> when the element is clicked:
      </li>
      <li class="mt-15">
        <div class="preview-con">
          <div class="hang-right"><span>Template</span></div>
          <prism-editor :code="exampleThree" language="html" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-15"><h3>How to access data from a method ?</h3></li>
      <li>You can access any of the data properties of the Vue component by using <b>this.propertyName</b> :</li>
      <li class="mt-15">
        <div class="preview-con">
          <div class="hang-right"><span>JS</span></div>
          <prism-editor :code="exampleFour" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-15">We do not have to use <b>this.data.name</b>, just <b>this.name</b>. Vue does provide a transparent binding for us. Using
        <b>this.data.name</b> will raise an error.
      </li>
      <li>As you saw before in the events description, methods are closely interlinked
        to events, because they are used as event handlers. Every time an event occurs, that method is called.
      </li>
    </ul>
  </a-layout>
</template>

<script>
import PrismEditor from 'vue-prism-editor';

export default {
  name: 'Methods',
  components: {
    PrismEditor
  },
  data () {
    return {
      exampleOne: 'new Vue({\n' +
          '  methods: {\n' +
          '    handleClick: function() {\n' +
          '      alert(\'test\')\n' +
          '    }\n' +
          '  }\n' +
          '})',
      exampleTwo: 'export default {\n' +
          '  methods: {\n' +
          '    handleClick: function() {\n' +
          '      alert(\'test\')\n' +
          '    }\n' +
          '  }\n' +
          '}',
      exampleThree: '<template>\n' +
          '  <a @click="handleClick">Click me!</a>\n' +
          '</template>',
      exampleFour: 'export default {\n' +
          '  data() {\n' +
          '    return {\n' +
          '      name: \'Flavio\'\n' +
          '    }\n' +
          '  },\n' +
          '  methods: {\n' +
          '    handleClick: function() {\n' +
          '      console.log(this.name)\n' +
          '    }\n' +
          '  }\n' +
          '}'
    };
  }
};
</script>

<style scoped>
  .list {
    list-style: none;
    padding-left: 0;
  }
</style>

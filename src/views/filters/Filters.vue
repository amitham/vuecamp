<template>
  <a-layout class="app-content">
    <h1>Filters</h1>
    <hr class="app-hr"/>
    <ul class="list">
      <li>
        <h2>What are the Filters ?</h2>
        <p>
          Filters takes in data as input and transforms it to a desired output. In this page,
          you'll use Filters to transform a message into a capitalized format.
          Vue.js allows you to define filters that can be used to apply common text formatting.
          Filters are usable in two places: mustache interpolations and v-bind expressions.
          Filters should be appended to the end of the JavaScript expression,
          denoted by the “pipe” symbol.We can implement filters as a,
        </p>
        <ol>
          <li>Local Filters</li>
          <li>Global Filters</li>
        </ol>
        <br/>
      </li>
      <li>
        <h3>Syntax :</h3>
        <ul class="list">
          <li>
            <div class="preview-con">
              <div class="hang-right"><span>html</span></div>
              <prism-editor :code="syntax" language="html" :readonly="true"></prism-editor>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <h3>Example</h3>
        <ul class="list">
          <li>
            <div class="preview-con">
              <div class="hang-right"><span>html</span></div>
              <prism-editor :code="exampleHtml" language="html" :readonly="true"></prism-editor>
            </div>
          </li>
        </ul>
        <h3>
          Define local filters in a component’s options:
        </h3>
        <ul class="list">
          <li>
            <div class="preview-con">
              <div class="hang-right"><span>JS</span></div>
              <prism-editor :code="exampleJSCode" language="js" :readonly="true"></prism-editor>
            </div>
          </li>
        </ul>
        <h3>
          or Define global filters before creating the Vue instance:
        </h3>
        <ul class="list">
          <li>
            <div class="preview-con">
              <div class="hang-right"><span>JS</span></div>
              <prism-editor :code="exampleJSCodeTwo" language="js" :readonly="true"></prism-editor>
            </div>
          </li>
          <li>
            <h4>Preview :</h4>
          </li>
          <li>
            <a-input v-model="message" placeholder="type any text here to format"/>
            <p>
              {{message | capitalize}}
            </p>
          </li>
        </ul>
        <h3>Filters can be chained</h3>
        <ul class="list">
          <li>
            <div class="preview-con">
              <div class="hang-right"><span>JS</span></div>
              <prism-editor :code="exampleFilterChain" language="html" :readonly="true"></prism-editor>
            </div>
          </li>
          <p>In this case, filterA, defined with a single argument, will receive the value of message, and then the
            filterB function will be called with the result of filterA passed into filterB‘s single argument.</p>
        </ul>
      </li>

    </ul>
  </a-layout>
</template>

<script>
import PrismEditor from 'vue-prism-editor';

export default {
  name: 'Filters',
  components: {
    PrismEditor
  },
  data () {
    return {
      syntax: '<!-- in mustaches -->\n<p>{{ message | capitalize }}</p> \n<!-- in v-bind -->\n<div v-bind:id="rawId | formatId"></div>',
      exampleHtml: '<div id="app">\n' +
          '<input type="text" v-model="message">\n' +
          '<p>\n' +
          '{{message | capitalize}}\n' +
          '</p>\n' +
          '</div>',
      exampleJSCode: 'new Vue({\n' +
          'el: "#app",\n' +
          'data: {\n' +
          'message:"hello there"\n' +
          '},\n' +
          'methods: {\n' +
          '//@TodoMethods\n' +
          '},\n' +
          'filters: {\n' +
          'capitalize: function (value) {\n' +
          'if (!value) return "" \n' +
          'value = value.toString()\n' +
          'return value.toUpperCase()\n' +
          '}\n' +
          '}\n' +
          '});\n',
      exampleJSCodeTwo: 'Vue.filter(\'capitalize\', function (value) {\n' +
          'if (!value) return "" \n' +
          'value = value.toString(); \n' +
          'return value.toUpperCase() \n' +
          '})\n\n' +

          'new Vue({\n' +
          '// ...\n' +
          '})',
      exampleFilterChain: '{{ message | filterA | filterB }}',
      message: ''
    };
  },
  filters: {
    capitalize: function (value) {
      if (!value) { return ''; }
      value = value.toString();
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>
  .list {
    list-style: none;
    padding-left: 0;
  }
</style>

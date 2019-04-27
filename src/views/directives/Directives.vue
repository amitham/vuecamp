<template>
  <a-layout class="app-content">
    <h1>Directive / Custom Directives</h1>
    <hr class="app-hr"/>
    <ul class="list">
      <li>
        <h2>What are directives ?</h2>
        <p>
          Directives are commands that tells the framework or the library to do something or the control html element's
          behaviour. There are some inbuild directives and also we can
          write custome directives. In vue.js all the inbuild directives are start with "v-". ex: v-bind, v-on, v-ref,
          v-show, v-if, v-repeat, v-text, v-html
          <br/>
          <a href="https://012.vuejs.org/api/directives.html#Empty_Directives" target="_blank">all directives</a>
        </p>
      </li>
      <li>
        <h3>Example 1 :</h3>
        <ul class="list">
          <li>
            <div class="preview-con">
              <div class="hang-right"><span>html</span></div>
              <prism-editor :code="exampleOne" language="html" :readonly="true"></prism-editor>
            </div>
          </li>
          <li>
            <h4>Preview :</h4>
          </li>
          <li>
            <p v-highlight:delayed="{mainColor: 'red'}">
              This elememt has custome directive for to set background color
            </p>
          </li>
        </ul>
      </li>
      <li>
        <h3>Example 2 :</h3>
        <ul class="list">
          <li>
            <div class="preview-con">
              <div class="hang-right"><span>html</span></div>
              <prism-editor :code="exampleTwo" language="html" :readonly="true"></prism-editor>
            </div>
          </li>
          <li>
            <h4>Preview :</h4>
          </li>
          <li>
            <p v-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">
              This elememt has custome directive for to set text color
            </p>
          </li>
        </ul>
      </li>
      <li class="mt-25">
        <hr class="app-hr"/>
      </li>
      <li><h2>What hooks directive has</h2></li>
      <li>
        <ol class="pl-15">
          <li>
            <b>bind (el, binding, vnode)</b> - once the directive is attached (mostly using)
            <ul class="pl-18">
              <li><b>el</b> : html element which is this directive binds to</li>
              <li><b>binding</b> : information about the directive binding (in this case information about the
                "v-highlight")
                <ul class="pl-18">
                  <li><b>binding.value</b> : value which we passed to the directive in html code after the "="
                    (v-highlight="'red'")
                  </li>
                  <li><b>binding.arg</b> : argument which we passed to the directive in html code after the ":"
                    (v-highlight:background),
                    here argument is "background"
                  </li>
                  <li><b>binding.modifiers</b> : modifiers which we passed to the directive in html code after the "."
                    which is attached to the argument (v-highlight:background.delayed), here modifier is "delayed".
                    And
                    modifier is an array
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><b>inserted(el, binding, vnode)</b> - inserted in parent node</li>
          <li><b>update(el, binding, vnode, oldVnode)</b> - once the component is updated(without children)</li>
          <li><b>componentUpdated(el, binding, vnode)</b> - once the component is updated(with children)</li>
          <li><b>unbind(el, binding, vnode)</b> - once the directive is removed</li>
        </ol>
      </li>
      <li>
        <h3 class="mt-15">How to use a directive in html file</h3>
        <div class="preview-con">
          <div class="hang-right"><span>html</span></div>
          <prism-editor :code="exampleThree" language="html" :readonly="true"></prism-editor>
        </div>
      </li>
      <li>
        <h3 class="mt-15">How to import a directive as a global</h3>
        <p>We can use separate folder location for all the global directives and import them in the main.js (then it
          will be available through out the application)</p>
        <div class="preview-con">
          <div class="hang-right"><span>main.js</span></div>
          <prism-editor :code="exampleFour" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li><h3 class="mt-15">How to create a directive</h3></li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>highlight.js</span></div>
          <prism-editor :code="highlightJSCode" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
    </ul>
  </a-layout>
</template>

<script>
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import PrismEditor from 'vue-prism-editor';

export default {
  name: 'Directives',
  components: {
    PrismEditor
  },
  data () {
    return {
      exampleOne: '<p v-highlight:delayed="{mainColor: \'red\'}"> ... </p>',
      exampleTwo: '<p v-highlight:background.delayed.blink="{mainColor: \'red\', secondColor: \'green\', delay: 500}"> ... </p>',
      exampleThree: '<div v-highlight:delayed="{mainColor: "red"}">Background color"</div>',
      exampleFour: '// custom directives\nimport from \'./directives/highlight\';',
      highlightJSCode: 'Vue.directive(\'highlight\', {\n' +
          '  bind (el, binding, vnode) {\n' +
          '    var delay = 0;\n' +
          '    if (binding.modifiers[\'delayed\']) {\n' +
          '      delay = 1000;\n' +
          '    }\n' +
          '\n' +
          '    if (binding.modifiers[\'blink\']) {\n' +
          '      let mainColor = binding.value.mainColor;\n' +
          '      let secondColor = binding.value.secondColor;\n' +
          '      let currentColor = mainColor;\n' +
          '\n' +
          '      setTimeout(() => {\n' +
          '        setInterval(() => {\n' +
          '          currentColor = currentColor === secondColor ? mainColor : secondColor;\n' +
          '          if (binding.arg === \'background\') {\n' +
          '            el.style.backgroundColor = currentColor;\n' +
          '            el.style.color = \'white\';\n' +
          '          } else {\n' +
          '            el.style.color = currentColor;\n' +
          '          }\n' +
          '        }, binding.value.delay);\n' +
          '      }, delay);\n' +
          '    } else {\n' +
          '      setTimeout(() => {\n' +
          '        if (binding.arg === \'background\') {\n' +
          '          el.style.backgroundColor = binding.value.mainColor;\n' +
          '        } else {\n' +
          '          el.style.color = binding.value.mainColor;\n' +
          '        }\n' +
          '      }, delay);\n' +
          '    }\n' +
          '  }\n' +
          '});'
    };
  }
};
</script>

<style scoped>
  .list {
    list-style: none;
    padding-left: 0;
  }

  .comment {
    color: green;
  }

  .preview-con {
    margin-top: -40px;
  }

  .hang-right {
    position: relative;
    z-index: 1000;
    padding: 8px 15px;
    right: 0;
    top: 50px;
    width: 100%;
    text-align: right;
  }

  .hang-right > span {
    background: #fff;
    font-weight: 500;
    color: #272822;
    padding: 2px 10px;
    border-radius: 30px;
    box-shadow: 0 0 10px #868686;
  }
</style>

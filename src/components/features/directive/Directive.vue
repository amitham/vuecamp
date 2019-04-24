<template>
  <div class="col-sm-9">
    <h4>
      <small>
        <b>Directive/Custome directives</b>
      </small>
    </h4>
    <hr>
    <br>

    <ul>
      <li>
        What are directives?
        <p>
          Directives are commands that tells the framework or the library to do something or the control html element's behaviour. There are some inbuild directives and also we can
          write custome directives. In vue.js all the inbuild directives are start with "v-". ex: v-bind, v-on, v-ref, v-show, v-if, v-repeat, v-text, v-html
          <br>
          <a
            href="https://012.vuejs.org/api/directives.html#Empty_Directives"
            target="_blank"
          >all directives</a>
        </p>

        <h6>Sample:</h6><hr>
        <p
          v-highlight:delayed="{mainColor: 'red'}"
        >This elememt has custome directive for to set background color</p>
        <p
          v-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"
        >This elememt has custome directive for to set text color</p>
      </li>
      <hr>
      <li>What hooks directive has</li>
      <p>
        <ol>
          <li>
            bind(el, binding, vnode) - once the directive is attached (mostly using)
          </li>
          <ul>
            <li>el: html element which is this directive binds to</li>
            <li>
              binding: information about the directive binding (in this case information about the "v-highlight")
              <ul>
                <li>binding.value: value which we passed to the directive in html code after the "=" (v-highlight="'red'")</li>
                <li>binding.arg: argument which we passed to the directive in html code after the ":" (v-highlight:background),
                  here argument is "background"</li>
                <li>binding.modifiers: modifiers which we passed to the directive in html code after the "."
                   which is attached to the argument (v-highlight:background.delayed), here modifier is "delayed". And modifier is an array
                   </li>
              </ul>
            </li>
          </ul>
          <p></p>
          <li>
            inserted(el, binding, vnode) - inserted in parent node
          </li>
           <li>
            update(el, binding, vnode, oldVnode) - once the component is updated(without children)
          </li>
           <li>
            componentUpdated(el, binding, vnode) - once the component is updated(with children)
          </li>
           <li>
            unbind(el, binding, vnode) - once the directive is removed
          </li>
        </ol>
      </p>

      <li>
        How to use a directive in html file
        <div class="pre code">
          <p v-text="'"<"div v-highlight:delayed="{mainColor: "red"}">Background color"<"/div>'"></p>
        </div>
      </li>

      <li>
        How to import a directive as a global
        <p>We can use separate folder location for all the global directives and import them in the main.js
          (then it will be available through out the application)
          <div class="pre code">
            <div class="right">main.js</div>
            <span class="comment"><b>// custome directives</b></span>
            import highlight from './directives/highlight';
          </div>
          </p>
      </li>

      <li>How to create a directive</li>
      <div class="pre code">
        <div class="right">highlight.js</div>
        Vue.directive('highlight', {
          <span class="comment"><b>// Code for the above directive</b></span>
          bind(el, binding, vnode){
            var delay = 0;
            if (binding.modifiers['delayed']) {
              delay = 1000
            }

            if (binding.modifiers['blink']) {
              let mainColor = binding.value.mainColor;
              let secondColor = binding.value.secondColor;
              let currentColor = mainColor;

              setTimeout(() => {
                setInterval(() => {
                  currentColor = currentColor == secondColor ? mainColor : secondColor;
                  if (binding.arg == 'background') {
                    el.style.backgroundColor = currentColor;
                    el.style.color = 'white';
                  } else {
                    el.style.color = currentColor;
                  }
                }, binding.value.delay)
              }, delay)
            } else {
              setTimeout(() => {
                if (binding.arg == 'background') {
                  el.style.backgroundColor = binding.value.mainColor;
                } else {
                  el.style.color = binding.value.mainColor;
                }
              }, delay);
            }
          }
        })
      </div>
    </ul>


  </div>
</template>

<style>
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

.right{
  float: right;
}

.mg-25{
  margin-left: 25px;
}
</style>

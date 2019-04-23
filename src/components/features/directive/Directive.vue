<template>
  <div class="col-sm-9">
    <h4>
      <small>
        <b>Directive</b>
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
        <p
          v-highlight:delayed="{mainColor: 'red'}"
        >This elememt has custome directive for to set background color</p>
        <p
          v-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"
        >This elememt has custome directive for to set text color</p>
      </li>
    </ul>
  </div>
</template>

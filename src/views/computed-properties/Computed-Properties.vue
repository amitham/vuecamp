<template>
  <a-layout class="app-content">
    <h1>Computed Properties</h1>
    <hr class="app-hr"/>
    <ul class="list">
      <li>
        <h2>What are Vue Computed Properties ?</h2>
        <p>Computed properties can be used to do quick calculations of properties that are displayed in the view. These
          calculations will be cached and will only update when needed.</p>
      </li>
      <li><p>There are multiple ways in Vue to set values for the view. This includes <b>directly binding</b> data value
        to the
        view, using simple <b>expressions</b> or using <b>filters</b> to do simple transformations on the content. In
        addition to
        this, we can use <b>computed properties</b> to calculate display value based on a value or a set of values in
        the data
        model.</p></li>
      <li>
        <h3>Computed Properties</h3>
      </li>
      <li>Computed properties allow us to have model-specific, complex values computed for the view. These values
        will be bound to the dependency values and only update when required.
      </li>
      <li class="mt-15">For example, we can have an array of subject results in the data model :</li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>JS</span></div>
          <prism-editor :code="exampleOne" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-25">
        Assume that we want to view the total for all subjects. We can't use filters or expressions for this task.
        <ul class="pl-18">
          <li><b>Filters</b> : are used for simple data formatting and that are needed at multiple places in the
            application.
          </li>
          <li><b>Expressions</b> : don't allow the use of flow operation or other complex logic. They should be kept
            simple.
          </li>
        </ul>
      </li>
      <li class="mt-15">
        <h3>Here's where computed properties come in handy. We can add a computed value to the model like this:</h3>
      </li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>JS</span></div>
          <prism-editor :code="exampleTwo" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li><p>The <b>totalMarks</b> computed property calculates the total marks using the <b>results</b> array. It
        simply loops through the values and returns the sub total.</p></li>
      <li>We can then display the computed value in the view:</li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>html</span></div>
          <prism-editor :code="exampleThree" language="html" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-25">
        <hr class="app-hr"/>
      </li>
      <li><h2>Computed Properties vs Methods ?</h2></li>
      <li><p>We could get the same result by using a method that outputs the total.</p></li>
      <li>Instead of having the totalMarks function in the computed section, we can move it to the methods and in the
        view we can change the template to execute the method:
      </li>
      <li>
        <div class="preview-con">
          <div class="hang-right"><span>html</span></div>
          <prism-editor :code="exampleFour" language="html" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-15">
        <p>While this gives the same output, we are taking a performance hit. Using this syntax, the <b>totalMarks()</b>
          method gets executed every time the page renders (ie: with every change).</p>
        <p>If instead we had a computed property, Vue remembers the values that the computed property is dependent on
          (ex: In the previous example, that would be <b>results</b>). By doing so, Vue can calculate the values only if
          the dependency changes. Otherwise, the previously cached values will be returned.</p>
        <p>Because of this, the function must be a <b>pure function</b>. It can't have side-effects. The output must
          only be dependent on the values passed into the function.</p>
      </li>
      <li><h3>Computed Setters</h3></li>
      <li>By default, the computed properties only present a getter. But, it's also possible to have setters.</li>
      <li class="mt-15">
        <div class="preview-con">
          <div class="hang-right"><span>JS</span></div>
          <prism-editor :code="exampleFive" language="js" :readonly="true"></prism-editor>
        </div>
      </li>
      <li class="mt-15">By having both getters and setters, we can bind the input value correctly to the model. If we
        set the fullName in a method, the passed-in string will be split into the first and last name.
      </li>
      <li class="mt-25">
        <hr class="app-hr"/>
      </li>
      <li><h2>A Word on Watchers</h2></li>
      <li>
        <p>While computed properties may be sufficient in most cases, watchers provide an additional level of control by
          allowing us to listen for changes to a property.</p>
      </li>
      <li>Watchers, as the name suggests, allows us to watch for changes in a model object. While it's possible to use
        watchers to get the same results as computed values, it's often more complex and expensive.
      </li>
      <li>
        <ul class="pl-18">
          <li><b>Async operations</b></li>
          <li><b>Setting intermediate values</b></li>
          <li><b>Limiting the number of times an operation gets called</b> (example : Debounce an input event)</li>
        </ul>
      </li>
    </ul>
  </a-layout>
</template>

<script>
import PrismEditor from 'vue-prism-editor';

export default {
  name: 'Computed-Properties',
  components: {
    PrismEditor
  },
  data () {
    return {
      exampleOne: 'data() {\r\n  return {\r\n    results: [\r\n      \t{\r\n          name: \'English\',\r\n          ' +
          'marks: 70\r\n        },\r\n        {\r\n          name: \'Math\',\r\n          marks: 80\r\n        ' +
          '},\r\n        {\r\n          name: \'History\',\r\n          marks: 90\r\n        }\r\n      ]\r\n  }\r\n}',
      exampleTwo: 'computed: {\r\n  totalMarks: function() {\r\n    let total = 0;\r\n    for(let i = 0; i < ' +
          'this.results.length; i++){\r\n      total += parseInt(this.results[i].marks);\r\n    }\r\n    ' +
          'return total;\r\n  }\r\n}',
      exampleThree: '<div id="app">\r\n  <div v-for="subject in results">\r\n    <input v-model="subject.marks">\r\n' +
          '    <span>\r\n      Marks for {{ subject.title }}: {{ subject.marks }}\r\n    </span>\r\n  </div>\r\n  ' +
          '<span>\r\n    Total marks are: {{ totalMarks }}\r\n  </span>\r\n</div>',
      exampleFour: '<span>\r\n  Total marks are: {{ totalMarks() }}\r\n</span>',
      exampleFive: 'computed: {\r\n  fullName: {\r\n    get: function() {\r\n      return this.firstName + ' +
          'this.lastName;\r\n    },\r\n    set: function(value) {\r\n      let names = value.split(\' \');' +
          '\r\n      this.firstName = names[0];\r\n      this.lastName = names[names.length - 1];\r\n    ' +
          '}\r\n  }\r\n}'
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

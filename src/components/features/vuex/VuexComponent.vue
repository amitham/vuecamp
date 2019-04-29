<template>
  <div>
    <p><b>TotalCount : {{ totalCount }}</b></p>
    <p v-show="countStatus" class="green">Count is more that 2</p>
    <p v-show="totalCount <= 2" class="red">Count is less that or equal to 2</p>
    <a-input placeholder="Enter Amount" v-model.number="inputValue" class="input"/>
    <br/>
    <a-button type="primary" @click="add">
      Add
    </a-button>
    &nbsp;
    <a-button type="primary" :disabled="totalCount <= 0" @click="deduct">
      Deduct
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'VuexComponent',
  data () {
    return {
      inputValue: 1
    };
  },
  computed: {
    totalCount () {
      return this.$store.state.totalCount;
    },
    countStatus () {
      return this.$store.getters.checkTotalCount;
    }
  },
  methods: {
    add () {
      // Dispatch the action to add
      this.$store.dispatch('add', this.inputValue);
    },
    deduct () {
      // Dispatch the action to deduct
      this.$store.dispatch('deduct', this.inputValue);
    }
  }
};
</script>

<style scoped>
  .input {
    width: 50%;
    margin-bottom: 15px;
  }

  .green {
    color: green;
  }

  .red {
    color: red;
  }
</style>

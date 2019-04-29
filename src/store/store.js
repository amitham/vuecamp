import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalCount: 10
  },
  getters: {
    checkTotalCount: state => {
      return state.totalCount > 2;
    }
  },
  mutations: {
    add (state, amount) {
      state.totalCount += amount;
    },
    deduct (state, amount) {
      state.totalCount -= amount;
    }
  },
  actions: {
    add (context, amount) {
      context.commit('add', amount);
    },
    deduct (context, amount) {
      if (context.state.totalCount >= amount) {
        context.commit('deduct', amount);
      }
    }
  }
});

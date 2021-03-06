import Vue from 'vue';
import Vuex from 'vuex';
import contactsStore from './contacts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    contactsStore,
  },
});

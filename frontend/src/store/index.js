import Vue from 'vue';
import Vuex from 'vuex';
import app from './app';
import user from './modules/user';
import movie from './modules/movie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
    movie,
  },
});

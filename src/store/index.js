import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters'

Vue.use(Vuex);

// 需要维护的状态
const state = {
  activeNav : {
  	current : '1',
  	title : '精选',
  },
  bottomNavIsShow : true
};

const mutations = {
  SET_ACTIVE_NAV_TITLE (state, title) {
    state.activeNav.title = title
  },
  SET_ACTIVE_NAV_CURRENT (state, current) {
    state.activeNav.current = current
  },
  SET_BOTTOM_NAV_SHOW (state, bool) {
    state.bottomNavIsShow = bool
  },
}

export default new Vuex.Store({
  getters,
  state,
  mutations
});
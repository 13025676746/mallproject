import Vue from 'vue'
import Vuex from 'vuex'

import getters from "@/store/getters";
import actions from "@/store/actions";
import mutations from "@/store/mutations";

Vue.use(Vuex)

const state={
  cartList:[]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

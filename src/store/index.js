import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getter from './getter.js'

import login from "./mudules/login"

Vue.use(Vuex)

// 存放着组件中信息的状态
const state = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getter,
    modules: {
        login,

    }
})
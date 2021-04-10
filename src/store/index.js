import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import test from './modules/test'
export default new Vuex.Store(
    {
        state: {},
        mutations: {},
        actions: {},
        modules: {
            test
        }
    }
)
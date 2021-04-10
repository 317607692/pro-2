const state = {
    testObject: ""
}
const getters = {
    getTestObject: (state) => {
        return state.testObject;
    }
}
const actions = {
    setTestObject({commit},payload){
        commit("setTestObject",payload);
    }
}
const mutations = {
    setTestObject(state,payload){
        state.testObject = payload;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
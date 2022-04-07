
const state = {
    // 左侧导航 列表数据
    routerViewLoading: false
};
const getters = {

};
const mutations = {
    setLoading(state: any, params: boolean) {
        state.routerViewLoading = params
    }
};
const actions = {

};

export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
};

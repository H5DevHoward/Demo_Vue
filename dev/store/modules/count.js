import types from '../mutation-types';

// initial state
const state = {
    count: 0,
};

// getters
const getters = {
    todoCount: state => state.count,
};

// actions
const actions = {
    increment ({commit}) {
        commit(types.INCREMENT);
    },
    decrement ({commit}) {
        commit(types.DECREMENT);
    },
};

// mutations
const mutations = {
    [types.INCREMENT] (state) {
        state.count += 1;
    },
    [types.DECREMENT] (state) {
        state.count -= 1;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

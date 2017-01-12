import types from './mutation-types';

export default {
    increment: ({commit}) => {
        commit(types.INCREMENT);
    },
    decrement: ({commit}) => {
        commit(types.DECREMENT);
    },
};

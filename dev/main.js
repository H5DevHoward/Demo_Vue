import Vue from 'vue';
import Vuex from 'vuex';

import router from './router';
import App from './App.vue';

Vue.use(Vuex);

const app = new Vue({
    router,
    components: {
        App,
    },
}).$mount('app');

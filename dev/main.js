import Vue from 'vue';

import router from './router';
import App from './App.vue';

const app = new Vue({
    router,
    components: {
        App,
    },
}).$mount('app');

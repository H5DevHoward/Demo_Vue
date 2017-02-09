import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './component/App.vue';

const app = new Vue({
    router,
    store,
    components: {
        App,
    },
}).$mount('app');

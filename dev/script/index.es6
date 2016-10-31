const Vue = require('vue');

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js! lol'
    }
});

const app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'some new message'
    }
});

const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
            text: 'Learn JavaScript'
        }, {
            text: 'Learn Vue'
        }, {
            text: 'Build something awesome'
        }]
    }
});

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
const app7 = new Vue({
    el: '#app-7',
    data: {
        todos: [{
            text: 'Learn JavaScript'
        }, {
            text: 'Learn Vue'
        }, {
            text: 'Build something awesome'
        }]
    }
});

import 'babel-polyfill';
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

const vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('');
        }
    }
});

const demo = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        isActive: true,
        error: null,
        ok: true,
        styleObject: {
            color: 'red',
            fontSize: '13px'
        },
        // classObject: {
        //     isActive: true,
        //     'text-danger': true,
        // },
    },
    computed: {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal',
            };
        },
    }
});
window.demo = demo;

const example1 = new Vue({
    el: '#example-1',
    data: {
        items: [{
            message: 'Foo'
        }, {
            message: 'Bar'
        }]
    }
});

const example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [{
            message: 'Foo'
        }, {
            message: 'Bar'
        }]
    }
});

new Vue({
    el: '#repeat-object',
    data: {
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    }
});


Vue.component('todo-item', {
    template: '<li>{{ title }} <button v-on:click="$emit(\'remove\')">X</button></li>',
    props: ['title']
});
new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function() {
            this.todos.push(this.newTodoText);
            this.newTodoText = '';
        }
    }
});

new Vue({
    el: '#example-prop',
    data: {
        parentMsg: 'Message from parent'
    },
    components: {
        child: {
            props: ['myMessage'],
            template: '<span>{{ myMessage }}</span>',
        }
    }
});

const once = new Vue({
    el: '#once',
    data: {
        msg: '1xxx'
    }
});

window.onceVue = once;

const vhtml = new Vue({
    el: '#vhtml',
    data: {
        rawHtml: '<span>html</span>'
    }
});

const div = document.querySelectorAll('div');
const domDivs = Array.from(div);
console.log(domDivs);

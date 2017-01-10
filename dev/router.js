import Vue from 'vue';
import VueRouter from 'vue-router';

import NavMenuComponent from './components/NavMenuComponent.vue';
import EditComponent from './components/EditComponent.vue';
import ShoppingCartComponent from './components/ShoppingCartComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
import FilterComponent from './components/FilterComponent.vue';
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/nav',
        component: NavMenuComponent,
    },
    {
        path: '/edit',
        component: EditComponent,
    },
    {
        path: '/shop',
        component: ShoppingCartComponent,
    },
    {
        path: '/search',
        component: SearchComponent,
    },
    {
        path: '/filter',
        component: FilterComponent,
    },
    {
        path: '/foo/:id',
        name: 'foo',
        component: Foo,
        children: [
            {
                // 当 /foo/:id/profile 匹配成功，
                // Bar 会被渲染在 Foo 的 <router-view> 中
                path: 'profile',
                component: Bar,
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;

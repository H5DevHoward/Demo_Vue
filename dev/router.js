import Vue from 'vue';
import VueRouter from 'vue-router';

// import NavMenuComponent from './components/NavMenuComponent.vue';
// import EditComponent from './components/EditComponent.vue';
// import ShoppingCartComponent from './components/ShoppingCartComponent.vue';
// import SearchComponent from './components/SearchComponent.vue';
// import FilterComponent from './components/FilterComponent.vue';
// import Foo from './components/Foo.vue';
// import Bar from './components/Bar.vue';


const NavMenuComponent = resolve => require(['./components/NavMenuComponent.vue'], resolve);
const EditComponent = resolve => require(['./components/EditComponent.vue'], resolve);
const ShoppingCartComponent = resolve => require(['./components/ShoppingCartComponent.vue'], resolve);
const SearchComponent = resolve => require(['./components/SearchComponent.vue'], resolve);
const FilterComponent = resolve => require(['./components/FilterComponent.vue'], resolve);
const Foo = resolve => require.ensure([], () => resolve(require('./components/Foo.vue')), 'group-foo');
const Bar = resolve => require.ensure([], () => resolve(require('./components/Bar.vue')), 'group-foo');

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.

        return savedPosition;
    }
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
        position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0;
        position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.

    return position;
};

const routes = [
    {
        path: '/',
        component: NavMenuComponent,
        meta: {
            scrollToTop: true,
        },
    },
    {
        path: '/edit',
        component: EditComponent,
        meta: {
            scrollToTop: true,
        },
    },
    {
        path: '/shop',
        component: ShoppingCartComponent,
        meta: {
            scrollToTop: true,
        },
    },
    {
        path: '/search',
        component: SearchComponent,
        meta: {
            scrollToTop: true,
        },
    },
    {
        path: '/filter',
        component: FilterComponent,
        meta: {
            scrollToTop: true,
        },
    },
    {
        path: '/foo/:id',
        name: 'foo',
        component: Foo,
        meta: {
            scrollToTop: true,
        },
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
    base: __dirname,
    scrollBehavior,
    routes,
});

export default router;

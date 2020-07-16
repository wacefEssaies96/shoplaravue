require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('add-product', require('./components/AddProductComponent.vue').default);
//Vue.component('test', require('./components/TestComponent.vue').default);

import products from './components/ProductsComponent.vue';
import test from './components/TestComponent.vue';

const routes = [
    {path: '/products', component: products},
    {path: '/test', component : test}
];

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    router: router
});
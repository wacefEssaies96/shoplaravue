require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('add-product', require('./components/AddProductComponent.vue').default);
Vue.component('edit-product', require('./components/EditProductComponent.vue').default);

import products from './components/ProductsComponent.vue';

const routes = [
    {path: '/products', component: products},
];

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    router: router
});
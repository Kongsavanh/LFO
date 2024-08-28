import './bootstrap';

import { createApp } from 'vue';
import  App  from './App.vue';
import router from './router';
import SideMenu from './companent/SideMenu.vue'

import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App)
app.component('SideMenu',SideMenu)
app.use(router)
app.use(pinia)
app.mount('#app-vue');
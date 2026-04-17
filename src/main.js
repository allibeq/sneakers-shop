import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import Saved from "./pages/Saved.vue";

const routes = [
    {
        path: '/', name: 'Home', component: Home,
    },
    {
        path: '/saved', name: 'Saved', component: Saved,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(autoAnimatePlugin);
app.mount('#app');

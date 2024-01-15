import { createApp } from 'vue';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';

import router from './router/router.js';
createApp(App).use(router).use(ElementPlus).mount('#app');

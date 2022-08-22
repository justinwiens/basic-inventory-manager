import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router';

const myApp = createApp(App);

myApp.config.globalProperties.$filters = {
    //future use 
};

myApp.use(router).mount('#app');
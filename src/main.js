import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import components from './components/UI';

import './assets/main.css';
const app = createApp(App);
const pinia = createPinia();

components.forEach(component => {
    console.log(component.name, component)
    app.component(component.name, component)
})

createApp(App).use(pinia)
            .mount('#app')

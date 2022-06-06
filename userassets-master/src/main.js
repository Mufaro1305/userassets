import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import mitt from 'mitt';

// import PrimeVue libraries
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

// initiate emitter
const emitter = mitt();


const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(store).use(router).use(PrimeVue).mount("#app");
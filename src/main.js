// import * as Vue from 'vue'
import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import SlideUpDown from 'vue3-slide-up-down'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/assets/css/tailwind.css'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App).use(store).use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
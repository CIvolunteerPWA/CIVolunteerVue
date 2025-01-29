import './assets/scss/custom.scss'
import './assets/css/styles.css'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



createApp(App)
  .use(router)
  .mount('#app')

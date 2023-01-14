import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '.././node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/theme.scss'
import './styles/header.scss'

createApp(App).use(store).use(router).mount('#app')

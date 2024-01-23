import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'
import "./styles/style.css"
import { createPinia } from 'pinia'


const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)

app.use(Quasar, quasarUserOptions)
app.mount('#app')

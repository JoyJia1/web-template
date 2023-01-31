import { createApp } from 'vue'
import { setGlobalOptions } from 'vue-request'
import { createPinia } from 'pinia'
import routes from '@/router'
import App from '@pages/App.vue'
import './assets/index.css'

setGlobalOptions({
  loadingDelay: 500,
})

createApp(App)
  .use(createPinia())
  .use(routes)
  .mount('#app')

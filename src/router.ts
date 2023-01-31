import { App } from 'vue'
import { createRouter,  createWebHashHistory as createHistory } from "vue-router"

const router = createRouter({
  history: createHistory(),
  routes: [
    { path: '/', component: () => import('@pages/list/index.vue') },
  ],
})

export default {
  install (app: App) {
    app.use(router)
  },
}

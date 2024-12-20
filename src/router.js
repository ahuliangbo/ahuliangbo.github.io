import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: About, },
    { path: '/projects', component: Projects, },
  ],
})
export default router

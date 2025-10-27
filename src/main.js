import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";

// Import components
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Portfolio from "./components/Portfolio.vue";
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";
import Careers from "./components/Careers.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/portfolio", component: Portfolio },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/careers", component: Careers },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Handle GitHub Pages redirect
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  router.replace(redirect);
}

const app = createApp(App);
app.use(router);
app.mount("#app");

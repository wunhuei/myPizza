import Vue from 'vue';
import VueRouter from 'vue-router';


import App from './App.vue'
import Default from './components/default.vue'
import About from './components/About.vue'
import Menu from './components/Menu.vue'
import News from './components/News.vue'
import ServiceBase from './components/Servicebase.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        { path: '', component: Default },
        { path: 'about', component: About },
        { path: 'menu', component: Menu },
        { path: 'news', component: News },
        { path: 'servicebase', component: ServiceBase },
      ]
    }
  ],
});
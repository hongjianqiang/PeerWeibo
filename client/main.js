import Favicon from './images/favicon.png'

// import Font from './fonts/Raleway-400_300_600.css'
import Normalize from './css/normalize.css'
import Skeleton from './css/skeleton.css'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import Buttons from './css/buttons.css'

import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'

import App from './App.vue'
import HomeView from './components/HomeView.vue'
import LoginView from './components/LoginView.vue'

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: HomeView },
    { path: '/Home', component: HomeView },
    { path: '/Login', component: LoginView }
  ]
});

let Data = {
  cfg: {}
};

new Vue({
  data: Data,
  components: { 'app': App },
  router
}).$mount('app');

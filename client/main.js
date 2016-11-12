import Favicon from './images/favicon.png'

// import Font from './fonts/Raleway-400_300_600.css'
import Normalize from './css/normalize.css'
import Skeleton from './css/skeleton.css'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import Buttons from './css/buttons.css'

import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'

import App from './App.vue'
import LoginView from './components/LoginView.vue'

Vue.use(Router);

const Home = { template: '<div>home</div>' };
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const router = new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: LoginView }, // all paths are defined without the hash.
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
});

let Data = {
  cfg: 'config'
};

new Vue({
  data: Data,
  components: { 'app': App },
  router
}).$mount('app');

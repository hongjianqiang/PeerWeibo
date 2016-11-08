import Favicon from './images/favicon.png'

// import Font from './fonts/Raleway-400_300_600.css'
import Normalize from './css/normalize.css'
import Skeleton from './css/skeleton.css'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import Buttons from './css/buttons.css'

import Socket from 'socket.io/node_modules/socket.io-client'
import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import App from './App.vue'
import LoginView from './components/LoginView.vue'
// import ItemView from './components/ItemView.vue'
// import UserView from './components/UserView.vue'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(Router);

// 2. Define route components
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 3. Create the router
const router = new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: LoginView }, // all paths are defined without the hash.
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})

new Vue({
  components: {'app': App},
  router
}).$mount('app');


let socket = Socket.connect('ws://localhost:3000');

socket.on('ed25519', function (data) {
  console.log(data);
});

let req = {};

req['Action'] = 'createSeed';
socket.emit('ed25519', JSON.stringify(req));

req['Action'] = 'createKeyPair';
req['seed'] = [229,112,193,136,81,117,167,103,214,97,96,104,12,16,45,102,180,92,179,179,57,227,247,155,46,110,60,148,2,254,179,205];
socket.emit('ed25519', JSON.stringify(req));
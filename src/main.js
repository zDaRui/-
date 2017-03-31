import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './config.js'
import directiveCon from './directive'
import apiConfig from './config-api'
import tool from './libs/tool'
import _$ from 'jquery'
import App from './App'

tool(Vue)
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
    routes:configRouter
})

Vue._$ = _$;
Vue.apiConfig = apiConfig
Vue.__Basepath   = 'http://localhost:8080/'; // 服务器
Vue.__HttpMethod = 'JSONP';
Vue.__Developing = true; // 是否开发中，如果否，则发布时则强制卸载mock
Vue.http.options.emulateJSON = true;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

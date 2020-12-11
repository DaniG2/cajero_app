// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'//New después de instalar y crear el router

import router from './router' //New después de router
Vue.use(vueRouter) //New después de router

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router, //New después de router 
  el: '#app',
  components: { App },
  template: '<App/>'
})

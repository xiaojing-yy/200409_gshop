/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../static/iconfont/iconfont.css'


new Vue({
  el: '#app',
  render: h => h(App),
  router,
})

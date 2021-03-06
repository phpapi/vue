// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引用vue
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
import App from './App'
// 引用路由配置文件
import routes from './config/routes'
import api from './config/api'
//API绑定到全局
Vue.prototype.$api = api
// 使用路由
Vue.use(VueRouter)

// 使用配置文件规则
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})

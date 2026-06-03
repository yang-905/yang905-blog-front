import Vue from 'vue'
import index from './index.vue'
import './style.css'

// 导入 Element UI
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'


Vue.use(ElementUI)   // 注册所有组件

Vue.config.productionTip = false

new Vue({
  render: h => h(index)
}).$mount('#app')
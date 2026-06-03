import Vue from 'vue'
import AdminLogin from './AdminLogin.vue'
import './style.css'
import 'element-ui/lib/theme-chalk/index.css'

import { Button, Input, Form, FormItem } from 'element-ui'


Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(AdminLogin)
}).$mount('#app')
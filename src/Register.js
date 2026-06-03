import Vue from 'vue'
import Register from './Register.vue'
import './style.css'
import 'element-ui/lib/theme-chalk/index.css'

import { Button, Input, Form, FormItem } from 'element-ui'


Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(Register)
}).$mount('#app')
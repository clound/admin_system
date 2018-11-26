import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(VueI18n)
Vue.use(ElementUI)

Vue.config.productionTip = false
const messages = {
  en: {
    message: {
      hello: 'world hello'
    },
    ...enLocale
  },
  cn: {
    message: {
      hello: '世界'
    },
    ...zhLocale
  }
}
const i18n = new VueI18n({
  locale: Cookies.get('lang') || 'cn',
  messages
})

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App.vue'
import messagePlugin from '@/utils/message.plugin'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

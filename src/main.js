import Vue from 'vue'
import App from './App.vue'
import messagePlugin from '@/utils/message.plugin'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDm9JBRPqnTxdv6LYHPGrm_ixP-DFlyRhg",
  authDomain: "vue-crm-fbase.firebaseapp.com",
  databaseURL: "https://vue-crm-fbase.firebaseio.com",
  projectId: "vue-crm-fbase",
  storageBucket: "vue-crm-fbase.appspot.com",
  messagingSenderId: "217428948439",
  appId: "1:217428948439:web:5e488ef4d0fa73ea350792",
  measurementId: "G-ZC8T4NLZ69"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged( () => {
  if(!app) {
    app = new Vue({
            router,
            store,
            render: h => h(App)
          }).$mount('#app')
  }
})

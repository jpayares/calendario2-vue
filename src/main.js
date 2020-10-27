import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXBwk-t9LTECVr8iBiihHzUVncpMNpnnY",
  authDomain: "vuetify-calendario.firebaseapp.com",
  databaseURL: "https://vuetify-calendario.firebaseio.com",
  projectId: "vuetify-calendario",
  storageBucket: "vuetify-calendario.appspot.com",
  messagingSenderId: "302762284651",
  appId: "1:302762284651:web:81014e6aa4b1bcd200c32e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {
  Form,
  HasError,
  AlertError
} from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form
//import v form end
//for vue select2
import vSelect from 'vue-select'
Vue.component('v-select', vSelect);
window._ = require('lodash');
window.axios = require('axios');
window.toastr = require('toastr'); //for my toaster alert 


Vue.config.productionTip = true;
import 'vue-select/dist/vue-select.css';
import 'toastr/build/toastr.min.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

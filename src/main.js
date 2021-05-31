import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
  namespace: 'my-touch'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

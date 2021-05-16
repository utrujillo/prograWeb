import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEdit, faTrash)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
  .use(router)
  .component('fas', FontAwesomeIcon)
  .mount('#app')
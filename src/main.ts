import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import getDialogComponent from './components/dialog'
import 'element-plus/dist/index.css'
import _ from 'lodash'
const app: any = createApp(App)
app.config.globalProperties.$lodash = _
app.config.globalProperties.$getDialogComponent = getDialogComponent

app.use(store).use(router).use(ElementPlus).mount('#app')




// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import elementUI from 'element-ui';

// createApp(App).use(store).use(router).use(elementUI).mount('#app')

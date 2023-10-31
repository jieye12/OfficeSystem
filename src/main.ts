import { createApp } from 'vue'
import App from './App.vue'
//导入路由
import router from './router/index'
//导入scss样式
import '@icon-park/vue-next/styles/index.css'
import 'prosemirror-view/style/prosemirror.css'
import 'animate.css'

import '@/styles/font.scss'
import '@/styles/global.scss'
import '@/styles/prosemirror.scss'
const app = createApp(App)
app.use(router)
app.mount('#app')

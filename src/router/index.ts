import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Equipment from '../components/EquipmentIdentification/Equipment.vue'
import Home from '../view/Home/index.vue'
import Word from '../view/Word/index.vue'
import Excel from '../view/Excel/index.vue'
import PowerPoint from '../view/PowerPoint/index.vue'
import Editor from '../view/PowerPoint/Editor/index.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Equipment,
        meta: {
            name: "判断登录设备"
        }
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/word",
        component: Word
    },
    {
        path: "/excel",
        component: Excel
    },
    {
        path: "/powerpoint",
        component: PowerPoint
    },
    {
        path: "/editor",
        component: Editor
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
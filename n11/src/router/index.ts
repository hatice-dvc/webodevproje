import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        name:"HomePage",
        path:"/",
        component: () => import("@/pages/HomePage.vue")
    },
    {
        name:"AddressPage",
        path:"/address",
        component: () => import("@/pages/AddressPage.vue")
    },
    {
        name:"LoginPage",
        path:"/login",
        component: () => import("@/pages/LoginPage.vue")
    },
    {
        name:"RegisterPage",
        path:"/register",
        component: () => import("@/pages/RegisterPage.vue")
    }
]


const router = createRouter({
    routes,
    history:createWebHashHistory()
})


export default router




import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: () => import("../home/home.vue"),
            meta: {
                home: true,
            },
        },
        {
            path: "/user",
            name: "user",
            component: () => import("../user/user.vue"),    
            meta: {
                user: true,
            },
        },
    ],
});

export default router;

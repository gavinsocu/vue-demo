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
            component: () => import("../pages/home.vue"),
            meta: {
                home: true,
            },
        },
        {
            path: "/user",
            name: "user",
            component: () => import("../pages/user.vue"),    
            meta: {
                user: true,
            },
        },
        {
            path: "/classify",
            name: "classify",
            component: () => import("../pages/classify.vue"),    
            meta: {
                classify: true,
            },
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../pages/about.vue"),    
            meta: {
                about: true,
            },
        },
    ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Body from "../dashboard/body.vue";
import Admin from "../user/Admin.vue";

const routes = [
    { path: "/", name: "dashboard.body", component: Body },
    { path: "/user/admin/", name: "user.admin", component: Admin },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

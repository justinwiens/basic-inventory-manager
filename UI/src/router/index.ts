import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, createWebHashHistory } from "vue-router";

import Dashboard from '../views/Dashboard.vue';
import Unauthorized from '../views/Unauthorized.vue';

import confirmAuth from "./auth";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: confirmAuth,
        children: [
        ],
    },
    {
        path: '/unauthorized',
        name: 'Unauthorized',
        component: Unauthorized,
    },    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
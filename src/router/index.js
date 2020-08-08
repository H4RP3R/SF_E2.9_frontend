import Vue from 'vue'
import VueRouter from 'vue-router'
import EmailsList from '../views/EmailsList.vue';
import SendEmail from '../views/SendEmail.vue';

Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //     path: '/',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/',
        name: 'SendEmail',
        component: SendEmail,
        meta: {
            title: 'Mailer - Send Email',
        }
    },
    {
        path: '/emails',
        name: 'EmailsList',
        component: EmailsList,
        meta: {
            title: 'Mailer - Last Emails',
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

export default {
    path: "/mine",
    component: () => import("@/views/Mine"),
    children : [
        {
            path : 'center',
            component : () => import("@/views/Mine/center.vue"),
            meta:{
                auth: true
            }
        },
        {
            path: 'orderList',
            component: () => import("@/views/Mine/orderList.vue"),
            meta: {
                auth: true
            }
        },
        {
            path : 'login',
            component: () => import("@/components/Login"),
            meta: {
                auth: false
            }
        },
        {
            path : 'register',
            component: () => import("@/components/Register"),
            meta: {
                auth: false
            }
        },
        {
            path : 'findPassword',
            component: () => import('@/components/FindPassword'),
            meta: {
                auth: false
            }
        },
        {
            path : '/mine',
            redirect : 'center'
        }
    ],

}
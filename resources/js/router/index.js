import { createWebHistory, createRouter } from "vue-router";
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Inventory from '../pages/Inventory.vue';
import PR from '../pages/PR.vue';
import PO from '../pages/PO.vue';
import Sales from '../pages/Sale.vue';
import Report from '../pages/Report.vue';
import Nopage from '../pages/Nopage.vue';
import { useStore } from "../store/auth";

const authMiddleWare = (to, from, next) => {

    const token = localStorage.getItem('web_token');
    const user = localStorage.getItem('web_user');
    const store = useStore();

//  console.log(token);

    if(!token){
        next({
            path:'/sales',
            replace: true
        })
    }else {

        store.set_token(token);
        store.set_user(user);

        next();

    } 

}

export const routes =[
    {
        path:'/',
        redirect:'/sales'
    },
    {
        name:'login',
        path: '/login',
        component: Login
    },
    {
        name:'register',
        path: '/register',
        component: Register,
        meta:{
            middleWare:[authMiddleWare]
        },
    },
    {
        name:'PO',
        path: '/PO',
        component: PO,
        meta:{
            middleWare:[authMiddleWare]
        },
    },
    {
        name:'PR',
        path: '/PR',
        component: PR,
        meta:{
            middleWare:[authMiddleWare]
        },
    },
    {
        name:'inventory',
        path: '/inventory',
        component: Inventory,
        meta:{
            middleWare:[authMiddleWare]
        },
    },
    {
        name:'sales',
        path: '/sales',
        component: Sales,
        meta:{
            middleWare:[authMiddleWare]
        },
    },
    {
        name:'report',
        path: '/report',
        component: Report,
        meta:{
            middleWare:[authMiddleWare]
        },
    },
    {
        name:'no_page',
        path: '/:pathMactch(.*)*',
        component: Nopage
    },


];

const router= createRouter ({
    history:createWebHistory(),
routes:routes,
scrollBehavior(){
    window.scrollTo(0,0)
}

});


router.beforeEach((to,from,next)=>{
    const token = localStorage.getItem('web_token');

    if(to.meta.middleware){
        to.meta.middleware.forEach(middleware => middleware(to, from, next))
    } else {
        if(to.path == '/login' || to.path == '/'){
            if(token){
                next({
                    path:'/sales',
                    replace: true
                })
            } else {
                next();
            }
        } else {
            next();
        }
    }

});
export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/home.vue';
import Mine from '../pages/mine.vue';
import Shopcar from '../pages/shopcar.vue';
import Classify from '../pages/classify.vue'; 
import Login from '../pages/login/login.vue'; 

//声明使用插件
Vue.use(VueRouter);
export default new VueRouter({
    //所有路由
    routes:[
        { 
            path: '/home', 
            component: Home ,
            meta: {
                showFooter: true
            }
        },
        { 
            path: '/mine', 
            component: Mine ,
            meta: {
                showFooter: true
            }
        },
        { 
            path: '/shopcar', 
            component: Shopcar ,
            meta: {
                showFooter: true
            }

        },
        { 
            path: '/classify', 
            component: Classify,
            meta: {
                showFooter: true
            }
        },
        { 
            path: '/', 
            redirect: '/home' 
        },
        { 
            path: '/login', 
            component: Login 
        }
    ]
})
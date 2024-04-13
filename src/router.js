import Home from './components/Home.vue'
import Reg from './components/Reg.vue'
import Update from './components/Update.vue'
import Welcome from './components/Welcome.vue'

 import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },

    {
        name:'Reg',
        component:Reg ,
        path:'/reg'
    },

    {
        name:'Welcome',
        component:Welcome ,
        path:'/welcome'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    },
      

];


const router =createRouter({
    history:createWebHistory(),
    routes
});


export default router;
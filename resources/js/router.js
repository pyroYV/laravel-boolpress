//importo il necessario
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//importo le singole pagine
import About from './pages/AboutPage.vue';
import Contacts from './pages/ContactsPage.vue';
import Home from './pages/HomePage.vue';
import SinglePostPage from './pages/SinglePostPage'

const router = new VueRouter({
    mode:'history',
    //per ogni rotta inserisco
    routes:[
                {
                    path:'/',
                    name:'Home',
                    component: Home
                },
                {
                    path:'/Contacts',
                    name:'Contacts',
                    component:Contacts
                },
                {
                    path:'/About',
                    name:'About',
                    component:About
                },
                {
                    path:'/posts/:id',
                    name:'Single Post',
                    component: SinglePostPage
                }
            ],
        })

export default router

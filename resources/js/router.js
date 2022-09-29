//importo il necessario
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//importo le singole pagine
import About from './pages/AboutPage.vue';
import Contacts from './pages/ContactsPage.vue';
import App from './pages/app.vue';

const router = new VueRouter({
    mode:'history',
    //per ogni rotta inserisco
    routes:[
                {
                    path:'/',
                    name:'App',
                    component: App
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
                }
            ],
        })

export default router

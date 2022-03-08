import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Bikebrand from '@/components/Bikebrand.vue'
import Bikebdfromverify from '@/components/Bikebdfromverify.vue'
import BikeLoan from '@/components/Bikeloan.vue'
import Bikeloanotpverify from '@/components/Bikeloanotpverify.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // {path: '/', name: 'Index',component: Index},
        { path: '/', redirect: '/bikebrand/yamaha' },
        { path: '/bikebrand/:id', name: 'Bikebrand', component: Bikebrand },
        { path: '/phoneverify/:id', name: 'Bikebdfromverify', component: Bikebdfromverify },


        //bikelone
        { path: '/bike-loan', name: 'Bikeloan', component: BikeLoan },
        { path: '/bikeloanphoneverify/:id', name: 'Bikeloanotpverify', component: Bikeloanotpverify },
    ],
    mode: 'history', //for remove # in url 
})
import Vue from 'vue'
import App from './App.vue'
// import VideoBackground from 'vue-responsive-video-background-player'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics';

import Home from './components/Home.vue'
import Artist from './components/Artist.vue'
import Exhibition from './components/Exhibition.vue'
import Bio from './components/Bio.vue'
import Info from './components/Info.vue'
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'

Vue.component('vue-cookie-accept-decline', VueCookieAcceptDecline)


Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/info', name: 'info', component: Info },
    { path: '/bio', name: 'bio', component: Bio },
    { path: '/exhibition/:slug', name: 'exhibition', component: Exhibition },
    { path: '/artist/:slug', name: 'artist', component: Artist }
]

const router = new VueRouter({
    routes
})


Vue.use(VueAnalytics, {
    id: 'UA-97060633-2',
    disabled: true,
    router,
    set: [
        { field: 'anonymizeIp', value: true }
    ]
})

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
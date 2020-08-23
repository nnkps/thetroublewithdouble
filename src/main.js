import Vue from 'vue'
import App from './App.vue'
// import VideoBackground from 'vue-responsive-video-background-player'
import VueRouter from 'vue-router'

import Artist from './components/Artist.vue'
import Exhibition from './components/Exhibition.vue'
import Bio from './components/Bio.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/bio', name: 'bio', component: Bio },
    { path: '/exhibition/:slug', name: 'exhibition', component: Exhibition },
    { path: '/artist/:slug', name: 'artist', component: Artist }
]

const router = new VueRouter({
    routes
})

Vue.config.productionTip = false

// Vue.component('video-background', VideoBackground);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
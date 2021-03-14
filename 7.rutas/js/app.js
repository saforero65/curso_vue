const router = new VueRouter({
    base: "7.rutas",
    routes: [{
            path: '/list_person',
            component: ListsPerson
        },
        {
            path: '/list_programing',
            component: ListsPrograming
        }
    ]
})
const app = new Vue({
    router,
    el: '#app',

});
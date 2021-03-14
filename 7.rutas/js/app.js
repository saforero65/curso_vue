const PageNotFound = {
    template: '#PageNotFound'
};
const router = new VueRouter({
    base: "7.rutas",
    routes: [{
            path: '/list_person',
            component: ListsPerson
        },
        {
            path: '/list_programing',
            component: ListsPrograming
        },
        {
            path: '*',
            component: PageNotFound
        }

    ]
})
const app = new Vue({
    el: '#app',
    router,
    mounted() {
        console.log(this.$route)
    },

});
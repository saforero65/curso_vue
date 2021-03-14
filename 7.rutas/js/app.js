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
    data: {
        img_pixa: 'https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_960_720.jpg',
    },
});
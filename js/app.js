const Foo = { template: '<div>Hola que mas pues</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})
const app = new Vue({
    el: '#app',
    router,
    data: {
        message: "Hola Vue",
        sum: 3 + 6,
        value: '9',
        isVisible: true,
        people: ['Andres', 'Juan', 'Pepe', 'Alejando'],
        numero: 10,
        p_error: false,
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        calculateSum(value1, value2) {
            return value1 + value2;
        },
        incrementar() {
            this.numero++;
        },
        decrementar() {
            this.numero--;
        }
    },
    watch: {
        numero: function(val) {
            console.log("watch:" + val);
        }
    }
});
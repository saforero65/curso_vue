const app = new Vue({
    el: '#app',
    data: {
        message: "Hola Vue",
        sum: 3 + 6,
        value: '9',
        isVisible: true,
        people: ['Andres', 'Juan', 'Pepe', 'Alejando'],
        content_html: "<h1>Hola Vue de nuevo</h1>",
        src: "https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg",
        text: "lorem sidfhis sdifnidsbfsd sifbdsuibf"
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
        }
    }
});
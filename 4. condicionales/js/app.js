const app = new Vue({
    el: '#app',
    data: {
        message: "Hola Vue",
        sum: 3 + 6,
        value: '9',
        isVisible: true,

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
const app = new Vue({
    el: '#app',
    data: {
        message: "Hola Vue",
        sum: 3 + 6,
        value: '9',
        isVisible: true,
        people: ['Andres', 'Juan', 'Pepe', 'Alejando'],
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        filterPeople: function() {
            this.people = this.people.filter(person => {
                return person.length > 5
            });
        },
        calculateSum(value1, value2) {
            return value1 + value2;
        }
    }
});
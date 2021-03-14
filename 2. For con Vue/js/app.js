const app = new Vue({
    el: '#app',
    data: {
        message: "Hola Vue",
        sum: 3 + 6,
        value: '9',
        isVisible: true,
        filtro_edad: 25,
        people: ['Andres', 'Juan', 'Pepe', 'Alejando'],
        CopyArrayObjets: [],
        ArrayObjets: [
            { name: "andres", surname: "cruz", age: 28 },
            { name: "fernadn", surname: "paco", age: 18 },
            { name: "valeria", surname: "manfg", age: 25 },
            { name: "nancy", surname: "mora", age: 24 },
            { name: "angelica", surname: "forero", age: 258 },
            { name: "santiago", surname: "segio", age: 268 },
            { name: "jesus", surname: "alvaro", age: 2108 },
        ],
    },
    created: function() {
        this.CopyArrayObjets = this.ArrayObjets;
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        filterPeopleObjets: function() {
            this.ArrayObjets = this.CopyArrayObjets;
            this.ArrayObjets = this.ArrayObjets.filter(
                person => {
                    return person.age > this.filtro_edad
                }
            )
        },
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
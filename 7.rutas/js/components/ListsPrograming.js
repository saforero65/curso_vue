const ListsPrograming = {
    name: "ListsPrograming",
    template: `
    <div>
        <ul>
            <li v-for='lenguaje in lenguajes'>{{lenguaje}}</li>
        </ul>
    </div> `,
    data: function() {
        return {
            lenguajes: ['c++', 'R', 'Python']
        }
    }
}
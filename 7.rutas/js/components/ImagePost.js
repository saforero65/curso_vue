Vue.component('img-post', {
    template: '<img :src="imgPost()" :alt="title" :title="title">',
    props: {
        url: String
    },
    data: function() {
        return {
            title: "Titulo de la img",
        }
    },
    methods: {
        imgPost() {
            if (this.url != "") {
                return this.url;
            }
            return "https://cdn.pixabay.com/photo/2012/12/20/10/12/align-fingers-71282_960_720.jpg"
        }
    },
});
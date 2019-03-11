export default {
    data() {
        return {
            formData: {
                name: '',
                password: ''
            },
            message:  ''
        }
    },
    mounted: function() {
        this.testAxios();
    },
    methods: {
        testAxios() {
            const path = require('path');
            console.log(path.resolve(__dirname,'src'));
            let self = this;
            this.$http.get('/api')
            .then((res) => {self.message = res.data})
            .catch(error => console.log());
        }
    }
}
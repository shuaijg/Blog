import BottomNav from "../../../components/layout/BottomNav.vue"

export default {
    name: "loginView",
        components: {
            "bottom-nav": BottomNav,
        },
    data() {
        return {
            formData: {
                name: '',
                password: ''
            },
            message:  ''
        }
    },
    mounted: function () {
        $('.main-content').height($(window).height()-180)
        this.testAxios();
    },
    methods: {
        testAxios() {
            let self = this;
            this.$http.get('/api')
            .then((res) => {self.message = res.data})
            .catch(error => console.log());
        }
    }
}
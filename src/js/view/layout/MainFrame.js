import TopNav from "../../../components/layout/TopNav.vue"

export default {
    name: "mainFrameView",
    components: {
        "top-nav": TopNav,
    },
    data() {
        return {
            isCollapse: false,
            username: '',
            password: '',
            menuData: []
        }
    },
    mounted: function() {
        $('.el-aside').height($(window).height());
        let user = sessionStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            this.username = user.name || '';
            this.password = user.avatar || '';
        }
        this.queryMenu();
    },
    methods: {
        queryMenu() { 
            let _this = this;
            _this.$http.get('/api/menu').then(res => {
                _this.menuData = res.data;
                window.sessionStorage.setItem('menuData', JSON.stringify(res.data))
                })
                .catch(error =>
                    _this.$message({
                        message: error.message,
                        type: 'error'
                    }),
                );
        },
        changeCollapse(isCollapse) {
            console.log("-====")
            console.log(isCollapse)
        }
    }
}
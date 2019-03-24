import TopNav from "../../../components/layout/TopNav.vue"
import LeftSider from "../../../components/layout/LeftSider.vue"

export default {
    name: "mainFrameView",
    components: {
        "top-nav": TopNav,
        "left-sider": LeftSider
    },
    data() {
        return {
            isCollapse: false,
            username: '',
            password: ''
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
    },
    methods: {
        changeCollapse(isCollapse) {
            console.log("-====")
            console.log(isCollapse)
        }
    }
}
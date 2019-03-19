import TopNav from "../../../components/layout/TopNav.vue"
import BottomNav from "../../../components/layout/BottomNav.vue"
import LeftSider from "../../../components/layout/LeftSider.vue"

export default {
    name: "mainFrameView",
    components: {
        "top-nav": TopNav,
        "bottom-nav": BottomNav,
        "left-sider": LeftSider
    },
    data() {
        return {
            isCollapse: false
        }
    },
    mounted: function() {
        $('.el-aside').height($(window).height())
    },
    methods: {
        changeCollapse(isCollapse) {
            console.log("-====")
            console.log(isCollapse)
        }
    }
}
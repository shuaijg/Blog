
export default {
    props: ["menuData"],
    name: "leftSiderView",
    components: {
      
    },
      data() {
          return {
              isCollapse: false,
              activeIndex: null,
          };
    },
      watch: {
          "$route": function (to, from) {
              let _this = this;
              // 分割跳转到的url
              //let pathArr = to.params[0].split("/");
          }
        },
      mounted: function() {
         
      },
    methods: {
        changeCollapse() { 
            let _this = this;
            if (_this.isCollapse) {
                _this.isCollapse = false;
                _this.$emit("update:isCollapse", false);
            } else {
                _this.$emit("update:isCollapse", true);
                _this.isCollapse = true;
            }
        },
        handleOpen(key, keyPath) {
            let _this = this;
            _this.activeIndex = key;
            //console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            let _this = this;
            //console.log(key, keyPath);
        }
    }
  }
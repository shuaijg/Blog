
export default {
    name: "leftSiderView",
    components: {
      
    },
      data() {
          return {
              isCollapse: false
          };
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
                _this.isCollapse = true;
               _this.$emit("update:isCollapse", true);
            }
        },
        handleOpen(key, keyPath) {
            let _this = this;
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            let _this = this;
            console.log(key, keyPath);
        }
    }
  }
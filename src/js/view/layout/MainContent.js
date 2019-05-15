/**
 *  路由懒加载
 *  定义：懒加载也叫延迟加载，即在需要的时候进行加载，随用随载。从而提升了系统性能。
 *
 */
const Index = resolve => require(['../../../components/index/Index.vue'], resolve);
const ArticleContentManage = resolve => require(['../../../components/article/ArticleContentManage.vue'], resolve);
const ArticleTypeManage = resolve => require(['../../../components/article/ArticleTypeManage.vue'], resolve);
const BbsManage = resolve => require(['../../../components/bbs/BbsManage.vue'], resolve);
const CommentsManage = resolve => require(['../../../components/comments/CommentsManage.vue'], resolve);
const UserManage = resolve => require(['../../../components/user/UserManage.vue'], resolve);

export default {
    name: "mainContentView",
    components: {
     "index": Index, // 将动态组件注册进来
     "article-content-manage": ArticleContentManage, 
     "article-type-manage": ArticleTypeManage,
     "bbs-manage": BbsManage,
     "comments-manage": CommentsManage,
     "user-manage": UserManage,
    },
    data() {
      return {
        currComponent: ""
      };
  },  
    watch: {
    "$route": function (to, from) {
        let _this = this;
        let menuData = sessionStorage.getItem('menuData');
        if (menuData) { 
          menuData = JSON.parse(menuData);
        }
        // 分割跳转到的url
        let pathArr = to.params["pathMatch"].split("/");
        if (pathArr.length < 1) return;
        for (let firstLevelMenu in menuData) { 
          if (menuData[firstLevelMenu].id == pathArr[0]) {
            if (menuData[firstLevelMenu].component) {
              _this.currComponent = menuData[firstLevelMenu].component;
              break;
            } else { 
              let secondMenuData = menuData[firstLevelMenu].children;
              for (let secondLevelMenu in secondMenuData) {
                if (secondMenuData[secondLevelMenu].id == pathArr[1]) {
                  _this.currComponent = secondMenuData[secondLevelMenu].component;
                  break;
                }
              }
            }
            break;
          }
        }
      }
    },
    mounted: function() {
      
    },
    methods: {
      
    }
}
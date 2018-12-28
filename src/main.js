import Vue from 'vue';
import router from './router'; // 路由
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // element-ui的css文件引入
import App from './components/App.vue';
import axios from 'axios';

import '../static/css/global.css'; //引入全局class

const root = document.createElement('div')
document.body.appendChild(root);
document.title = "Blog";

Vue.prototype.$http = axios;
Vue.use(ElementUI);

// 创建Vue的根实例，以启动应用
new Vue({
  router,
  render: (h) => h(App)  //把app挂载到html里
}).$mount(root)   //调用api，$mount到html的节点里

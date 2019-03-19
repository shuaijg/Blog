import Vue from 'vue';
import router from './router'; // 路由
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // element-ui的css文件引入
import 'font-awesome/css/font-awesome.css'
import App from './components/App.vue';
import axios from 'axios';

import '../static/css/global.css'; //引入全局class
import '../static/css/overwrite.css'; //引入全局class

const root = document.createElement('div')
document.body.appendChild(root);
document.title = "Blog";

Vue.prototype.$http = axios;
Vue.use(ElementUI);

// 创建Vue的根实例，以启动应用
new Vue({
  router,
  //通过h把App组件挂载到html里面，这里只是声明了渲染的是组件App的内容，还需通过$mount挂载到html的一个节点上面
  render: (h) => h(App)  //把app挂载到html里
}).$mount(root)   //调用api，$mount到html的节点里

import Vue from 'vue';
import App from './components/App.vue';

const root = document.createElement('div')
document.body.appendChild(root)

// 创建Vue的根实例，以启动应用
new Vue({
  render: (h) => h(App)
}).$mount(root)

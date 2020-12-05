import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';

App.mpType = 'app'
import uView from "uview-ui";
Vue.use(uView);
const app = new Vue({
    ...App
})
app.$mount()
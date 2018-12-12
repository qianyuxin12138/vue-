<template>
  <div id="app">
    <router-view />
    <FootGuide/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
import './assets/styles/reset.css';//引入公共样式
import './assets/iconfont/iconfont.css';//引入iconfont字体图标
import FootGuide from './components/footguide';//引入底部导航栏

export default {
    components: {  //如何使用别的组件---------把引入的组件映射成标签
        FootGuide
    }
}
</script>
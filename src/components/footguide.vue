<template>
    <div class="footguide">
        <ul>
            <li @click="go('/home')" :class="{on:'/home'===$route.path}"><!--当前路由为/home时，绑定类名on-->
                <a href="javascript:;">
                    <span class="icon">
                        <i class="iconfont icon-shangjia"></i>
                    </span>
                    <span class="des">首页</span>
                </a>
            </li>
            <li @click="go('/classify')" :class="{on:'/classify'===$route.path}">
                <a href="javascript:;">
                    <span class="icon">
                        <i class="iconfont icon-fenlei"></i>
                    </span>
                    <span class="des">分类</span>
                </a>
            </li>
            <li @click="go('/shopcar')" :class="{on:'/shopcar'===$route.path}">
                <a href="javascript:;">
                    <span class="icon">
                        <i class="iconfont icon-gouwuche"></i>
                    </span>
                    <span class="des">购物车</span>
                </a>
            </li>
            <li @click="go('/mine')" :class="{on:'/mine'===$route.path}">
                <a href="javascript:;">
                    <span class="icon">
                        <i class="iconfont icon-wode"></i>
                    </span>
                    <span class="des">我的</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        go(path){
            this.$router.replace(path);
        }
    }
}
</script>
<style>
.footguide{
    display: flex;
    width: 100%;
    border-top: 1px solid #e4e4e4;
    height: 0.6rem;
    position: fixed;
    bottom: 0;
    background: #fff;
    align-items: center;
}
.footguide ul{
    width: 100%;
    display: flex;
}
.footguide ul li{
    flex: 1;
}
.footguide ul li a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.des{
    color: gray;
    font-size :0.12rem;
}
.iconfont{
    color: gray;
    font-size :0.2rem!important;
}
.on .iconfont,.on .des{
    color: #03d78d;
}
</style>



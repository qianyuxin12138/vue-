<template>
    <div class="home">
        <!--头部-->
        <div class="header">
            <a href="javascript:;"><i class="iconfont icon-character-avatar"></i></a>
            <i class="title">乐乐鲜果</i>
            <a href="javascript:;"><i class="iconfont icon-saoma"></i></a>
        </div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="https://imgqn5.fruitday.com/images/2018-11-12/801e4b231670d347088b5336d61ae9e3.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://imgqn9.fruitday.com/images/2018-11-23/eed186b062f3607fce245f922e53bb7e.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--管理收货地址-->
        <div class="address">
            <i class="iconfont icon-shangjia"></i>
            <i>乐乐鲜果-大港3店</i>
            <div>
                <i>管理收货地址</i>
                <i class="iconfont icon-jiantouyou"></i>
            </div>
        </div>
        <!--促销优惠-->
        <div class="seil">
            <i>促销优惠</i>
            <i>全场满减，满89减18</i>
        </div>
        <!--促销优惠列表-->
        <div class="seil_list">
            <ul>
                <li v-for="list in seillist" :key="list.id">
                    <img v-lazy="list.imgUrl" alt="">
                </li>
            </ul>
        </div>
        <!--热门推荐-->
        <div class="hot">
            热门推荐
        </div>
        <!--热门推荐列表-->
        <div class="hot_list">
            <ul>
                <li v-for="list in hotlist" :key="list.id">
                    <div class="list_img">
                        <img v-lazy="list.imgUrl" alt="">
                    </div>
                    <div class="list_name">
                        {{list.name}}
                    </div>
                    <div class="list_price">
                        <span>￥</span>
                        <span>{{list.price}}</span>
                        <span>/</span>
                        <span>{{list.piece}}</span>
                        <span class="iconfont icon-gouwuche"></span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="foot"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            seillist:{},
            hotlist:{}
        };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
        fetch("/api/home1")
        .then(body => body.json())
        .then(res => {
            console.log(res);
          this.seillist = res.data.list;
        });
        fetch("/api/home2")
        .then(body => body.json())
        .then(res => {
            console.log(res);
          this.hotlist = res.data.list;
        });
    }
  }
}
</script>
<style scoped>
/*热门推荐列表*/
.list_price{
    margin-bottom: 0.2rem;
}
.list_price ul{
    height: auto;
}
.list_price span:nth-of-type(1){
    font-size: 0.12rem;
}
.list_price span:nth-of-type(2){
    font-size: 0.18rem;
}
.list_price span:nth-of-type(5){
    float: right;
    display: inline-block;
    width: 0.28rem;
    height: 0.28rem;
    line-height: 0.28rem;
    text-align: center;
    border-radius: 50%;
    background: #03d78d;
    font-size: 0.14rem!important;
    color: #fff;
}
.list_price span{
    font-size: 0.12rem;
    color: #de7929;
}
.hot_list{
    height: 16.5rem;
}
.hot_list ul li{
    padding: 0 0.1rem;
    width: 42%;
    float: left;
    margin: 0.05rem;
    background: #fff;
}
.hot_list .list_img{
    padding: 0.3rem;
}
.hot_list .list_img img{
    width: 100%;
}
.list_name{
    font-size: 0.13rem;
    height: 0.2rem;
    line-height: 0.2rem;
    text-align: center;
}
.home{
    background: #f1f1f1; 
}
.foot{
    height: 0.6rem;
    position: relative;
    bottom: 0;
}
/*头部*/
.header{
    padding: 0 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #03d78d;
    color: #fff;
}
.header .icon-character-avatar{
    font-size: 0.26rem!important;
    color: #fff;
}
.header .icon-saoma{
    float: right;
    font-size: 0.3rem!important;
    color: #fff;
}
.header .title{
    font-size: 0.16rem;
    margin-left: 30%;
}
/*轮播图*/
.mint-swipe{
    height: 1.6rem;
}
.mint-swipe img{
    width: 100%;
}
/*管理收货地址*/
.address{
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.14rem;
    background: #fff;
    margin: 0.1rem 0;
    padding: 0 0.1rem;
}
.address .icon-shangjia{
    color: #03d78d;
    font-size: 0.2rem;
}
.address div{
    float: right;
}
.address .icon-jiantouyou{
    color: #979797;
    font-size: 0.15rem!important;
}
/*促销优惠*/
.seil{
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.14rem;
    background: #fff;
    margin: 0.1rem 0;
    padding: 0 0.1rem;
}
.seil i:nth-of-type(1){
    color: #ff6714;
    border-right :1px solid #f1f1f1;
    padding-right: 0.1rem;
}
.seil i:nth-of-type(2){
    padding-left: 0.1rem;
}
/*促销优惠列表*/
.seil_list img{
    width: 100%;
}
/*热门推荐*/
.hot{
    height: 0.5rem;
    margin: 0.1rem 0;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.16rem;
    background: #fff;
}
</style>

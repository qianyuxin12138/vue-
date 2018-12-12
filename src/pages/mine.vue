<template>
  <div class="mine">
    <div class="mine_header">我的</div>
    <div class="mine_log">
      <a href="javascript:;" class="mine_log_a">
        <router-link to="/login">
          <div class="touxiang">
            <i :class="{tx:this.$store.state.userName}">{{this.$store.state.userName?"":"登录后查看头像"}}</i>
          </div>
          <div class="user">
            <span>{{this.$store.state.userName?this.$store.state.userName:"登录/注册"}}</span>
          </div>
        </router-link>
        <div class="right">
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
      </a>
    </div>
    <div class="money">
      <ul>
        <li>
          <a href>
            <div>
              <span>0.00</span>
              <span>元</span>
            </div>
            <span>钱包</span>
          </a>
        </li>
        <li>
          <a href>
            <div>
              <span>0</span>
              <span>张</span>
            </div>
            <span>优惠券</span>
          </a>
        </li>
        <li>
          <a href>
            <div>
              <span>0</span>
              <span>分</span>
            </div>
            <span>积分</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li>
          <a href>
            <i class="iconfont icon-option"></i>
            <span>我的订单</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </a>
        </li>
        <li>
          <a href>
            <i class="iconfont icon-jifen"></i>
            <span>积分商城</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </a>
        </li>
        <li>
          <a href>
            <i class="iconfont icon-huiyuan"></i>
            <span>我的会员</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </a>
        </li>
        <li>
          <a href>
            <i class="iconfont icon-waimaifuwu-shiyongfangbian"></i>
            <span>意见或建议</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </a>
        </li>
        <li>
          <a href>
            <i class="iconfont icon-fuwu"></i>
            <span>我是商家</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    mounted () {
        console.log(this.$store.state);
    }
}
</script>
<style scoped>
.mine_log_a a{
    display: flex;
}
.right{
    position: relative;
}
.right .iconfont{
    position: absolute;
    top: 0;
    left: 0.65rem;
}
.touxiang i {
    width: 100%;
    height: 100%;
    display: inline-block;
}
.tx{
    background-image:url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1512987895,3648778109&fm=27&gp=0.jpg');
    background-size: 100% 100%;
}
.mine_header{
    height: 0.5rem;
    background: #03d78d;
    text-align: center;
    line-height: 0.5rem;
    color: #fff;
    font-size: 0.2rem;
    font-weight: bold;
    margin-bottom: 1px;
}
.mine_log{
    height: 0.8rem;
    background: #03d78d;
    padding: 0.3rem;
}
.mine_log .mine_log_a {
    display: flex;
}
.touxiang{
    overflow: hidden;
    margin-right: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: #eee;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.14rem;
}
.user,.right{
    height: 0.8rem;
    line-height: 0.8rem;
}
.user span,.right i{
    color: #fff;
    font-size: 0.2rem;
    font-weight: bold;
}
.right{
    margin-left: 1.05rem;
}
.money{
    height: 0.8rem;
    border-bottom: 0.15rem solid #eee;
}
.money ul{
    display: flex;
    height: 100%;
    background: #fff;
}
.money ul li{
    font-size: 0.13rem;
    flex: 1;
    text-align: center;
}
.money ul li:nth-of-type(2){
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.money ul li div{
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
}
.list ul li{
    padding:0 0.2rem;
    height: 0.545rem;
    line-height: 0.545rem;
    position: relative;
}
.list ul li .icon-option{
    font-size: 0.16rem;
    color: olivedrab;
}
.list ul li .icon-xiangyoujiantou{
    font-size: 0.16rem;
    color: #666;
    position: absolute;
    right: 0.2rem;
}
.list ul li span{
    font-size: 0.16rem;
    color: #666;
}
.list ul li:nth-of-type(3){
    border-bottom: 0.15rem solid #eee;
}
.list ul li:nth-of-type(5){
    border-bottom: 1rem solid #eee;
}
.icon-huiyuan{
    color:gold;
}
.icon-jifen{
    color:goldenrod;
}
.icon-fuwu{
    color: skyblue;
}
</style>
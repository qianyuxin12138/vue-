<template>
    <div class="classify">
        <div class="header">
            <input type="text" placeholder="输入您想搜索的水果">
            <button>搜索</button>
        </div>
        <div class="list">
            <div class="list_left">
                <ul>
                    <li v-for="list in classifylist" :key="list.id" @click="xuanran(list.id);addClass(list.id)" id="list.id" :class="{ classred:list.id==current}">{{list.type}}</li>
                </ul>
            </div>
            <div class="list_right">
                <ul>
                    <li  v-for="list in goods" :key="list.id">
                        <div class="right_img">
                            <img :src="list.imgUrl" alt="">
                        </div>
                        <div class="right_right">
                            <div class="aaa">
                                <div class="top">
                                    {{list.name}}
                                </div>
                                <div class="price">
                                    ￥{{list.price}}
                                </div>
                            </div>
                            <div class="shopcar" @click="addGoodsCar(list)">
                                <i class="iconfont icon-gouwuche"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
import { mapState } from 'vuex';
export default {
    data(){
        return {
            classifylist:{},
            goods:{},
            current:0
        }
    },
    mounted: function() {
        fetch("/api/classify")
            .then(body => body.json())
            .then(res => {
                this.classifylist = res.data.list;
                this.goods = this.classifylist[0].fruit;
            });
    },
    methods: {
        xuanran:function(index,e){
            this.goods = this.classifylist[index-1].fruit;
        },
        addClass:function(index){					
            this.current=index;
        },
        addGoodsCar(goodObj){
            var idExist = this.carts.find(list => {
				return list.node == goodObj.node;
			});
			if(!idExist){
			  this.$store.dispatch('addCar', goodObj);
				Toast('添加购物车成功');
				this.cartLen = this.carts.length;
			}else{
				Toast('该商品已经添加到购物车');
			}
		 }

    },
    computed:{
		 ...mapState([
				 "carts"
     	])
	 },
}
</script>
<style scoped lang="less">
@color:#03d78d;
.list_left .classred{
	background: #fff;
    color: @color;
}
.shopcar{
    line-height: 0.5rem;
    margin-top: 0.2rem;
}
.price{
    color: #de7929;
    font-size: 0.14rem;
    margin-top: 0.3rem;
}
.top{
    font-size: 0.14rem;
}
.right_right .aaa{
    width: 75%;
}
.right_right{
    width: 70%;
    display: flex;
    justify-content:flex-start;
    border-bottom: 1px solid #eee;
}
.right_img{
    width: 30%;
}
.right_img img{
    width: 100%;
}
.list{ 
    display: flex;
}
.list_right{
    width: 75%;
}
.list_right li{
    display: flex;
    padding: 0.1rem;
}
.list_left{
    width: 25%;
    background: #f1f1f1;
}
.list_left li{
    height: 0.5rem;
    font-size: 0.13rem;
    line-height: 0.5rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
    color:#999;
}
.header{
    padding: 0.1rem 0.2rem;
    height: 0.3rem;
    line-height: 0.3rem;
    background: #03d78d;
    color: #fff;
    font-size: 0.12rem;
    color: #eee;
}
.header input{
    height: 0.3rem;
    width: 78%;
    padding: 0 0.1rem;
    border-radius: 3px;
}
.header button{
    height: 0.3rem;
    width: 15%;
    background: #03d78d;
    color: #fff;
}
</style>
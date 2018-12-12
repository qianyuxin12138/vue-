<template>
    <div>
        <div class="header">
            购物车
        </div>
        <div class="shop">
            <ul>
                <li v-for="list in shopcarlist" :key="list.id">
                    <van-card
                        :num="list.count"
                        :price="list.price"
                        :desc="list.piece"  
                        :title="list.name"
                        :thumb="list.imgUrl"
                        >
                        <div slot="footer">
                            <van-stepper v-model="list.count" />
                        </div>
                    </van-card>
                </li>
            </ul>
        </div>
        <div class="jiesuan">
            <van-submit-bar
                :price="jiesuan()"
                button-text="提交订单"
                @submit="onSubmit"
            >
                <div @click="jiesuan">
                    <van-checkbox v-model="checked">全选</van-checkbox>
                </div>
            </van-submit-bar>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            checked:"",
            value: 1,
            shopcarlist:[],
        }
    },
    methods: {
        jiesuan(){
            var sum = 0;
            if (this.checked) {
                console.log(this.$store.state.carts)
                this.$store.state.carts.forEach(ele => {
                    sum += ele.count*ele.price*100;
                    console.log(sum)
                });
            }
            return sum;
        },
        onSubmit(){
        }
    },
    mounted () {
        this.shopcarlist = this.$store.state.carts;
        console.log(this.shopcarlist);
    }
}
</script>
<style scoped>
.header{
    padding: 0.1rem 0.2rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    background: #03d78d;
    color: #fff;
    font-size: 0.18rem;
    color: #eee;
}
.van-submit-bar{
    bottom: 0.6rem;
}
</style>
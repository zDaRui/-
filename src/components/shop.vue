<template>
    <div class="shop">
        <header class="header">
            <h3><span class="f-r" @click="change()">{{text}}</span>购物车</h3>
        </header>
        <section class="section">
            <div class="cont"  v-for="item in cartList">
                <div class="left">
                    <img src="../assets/images/shop_10.png" class="yuan">
                    <img :src="item.imgPic"  class="cont-lo"/>
                </div>
                <div class="right">
                    <p class="tit">{{item.name}}</p>
                    <p class="add-del"><button class="add" @click="plus(item)">+</button><input type="text" :value="item.count" class="text-input"><button class="del" @click="minus(item)">-</button>数量：11朵</p>
                    <p class="red">{{item.price | round}}</p>
                </div>
            </div>


            <div class="all_se">
                <div class="se_top">
                    <p><span class="f-r">-￥0.00</span><img src="../assets/images/shop_15.png">　折扣</p>

                    <p><span class="f-r">+￥0.00</span><img src="../assets/images/shop_18.png">　包装</p>

                    <p><span class="f-r">+￥0.00</span><img src="../assets/images/shop_20.png">　运费</p>
                </div>
                <div class="se_bot">
                    <p>
                        <button class="button">结算</button>
                        <img src="../assets/images/shop_24.png"><span>全选 &nbsp;&nbsp;</span>
                        <span>总计：￥{{ getTotalMount() | round}}</span>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapActions} from "vuex"
    export default {
        name:"shop",
        data(){
            return {
                text:"编辑",
                cartList: []
            }
        },
        filters: {
            round: function (value) {
                return value.toFixed(2)
            }
        },
        computed: {
    //    返回store中的值
            balance () {
                return this.$store.state.counts
            }
        },
        methods:{
        ...mapActions(["changeCurIndex"]),
        change(){
            if(this.text=="编辑"){
                 this.text="完成"
            }else{
                 this.text="编辑"
            }
         },
         getDataList: function () {
            this.$http.get('static/mock/cart.json').then(function (response) {
              this.cartList = response.body.result;
            })
          },
          plus: function (item) {
            //触发vuex的action
            this.$store.dispatch('increment')
            item.count++;
            //触发change事件，通知父组件
            this.$emit('change')
          },
          minus: function (item) {
            //触发vuex的action
            this.$store.dispatch('decrement')
            if (item.count > 1) {
              item.count--;
              //触发change事件，通知父组件
              this.$emit('change')
            } else {
              item.count = 1;
            }
          },
          getTotalMount: function () {
            var sum = 0;
            this.cartList.forEach(function (value, index) {
              sum += value.count * value.price;
            });
            return sum;
          }
            },
            mounted(){
                this.changeCurIndex(2)
                  this.$nextTick(function () {
                    this.getDataList();
                 })
            },
             filters: {
          round: function (value) {
            return value.toFixed(2)
          }
        }
    }

</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .black{
        color: #000000;
    }
    .red{
        color: #fc6177;
    }
    .mt{
        margin-top: 16px;
    }
    .shop{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .header{
        width: 100%;
        height: 44px;
        background: #fc6177;
        color: #ffffff;
        font-size: 16px;
    }
    .header h3{
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-weight: normal;
    }
    .f-r{
        float: right;
        margin-right: 10px;
    }
    .section{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .cont{
        display: flex;
        width: 100%;
        height: 112px;
        border-bottom: 1px solid #f1f1f1;
    }
    .left{
        height: 112px;
        float: left;
        flex: 4;
    }
    .yuan{
        width: 18px;
        height: 18px;
        float: left;
        padding: 50px 0 0 10%;
    }
    .cont-lo{
        float: right;
        width: 70px;
        height: 70px;
        margin: 20px 30px 0 0;
    }
    .right{
        flex: 5;
        font-size: 12px;
        margin: 20px 0;
    }
    .right p{
        height: 18px;
        line-height: 18px;
    }
    .all_se{
        width: 100%;
        height: 124px;
        position: fixed;
        bottom: 44px;
    }
    .se_top{
        height: 78px;
        width: 100%;
        background: #f1f7fe;
    }
    .se_top p{
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        color: #abaeaf;
    }
    .se_top p img{
        width: 16px;
        height: 16px;
        float: left;
        margin: 5px 10px 0 10px;
    }
    .se_bot{
        height: 46px;
        width: 100%;
        background: #fc6177;
    }
    .se_bot p {
        height: 46px;
        line-height: 46px;
        color: #fff;
        font-size: 14px;
    }
    .se_bot p img{
        width: 20px;
        height: 20px;
        border-radius: 10px;
        float: left;
        margin: 13px 20px 0 10px;
    }
    .se_bot p span{
        float: left;
        font-size: 18px;
    }
    button{
        float: right;
        border: none;
        background: #fff;
        width: 100px;
        height: 100%;
        color: #333;
        font-weight: bolder;
        font-size: 16px;
    }
    p.add-del{
        height: 36px;
    }
    .add{
        width: 30px;
        height: 30px;
        background: #fc6177;
        float: right;
        margin: 3px;
        color: #fff;
        font-size: 16px;
    }
    .del{
        width: 30px;
        height: 30px;
        background: #efefef;
        float: right;
        margin: 3px;
        color: #fc6177;
        font-size: 16px;
        font-weight: bolder;
    }
    .text-input{
        width: 30px;
        height: 30px;
        background: #feebeb;
        float: right;
        margin: 3px;
        border: none;
        text-align: center;
        color: #fc6177;
        font-size: 16px;
    }

</style>
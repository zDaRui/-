<template>
    <div class="all">
        <header class="header">
            <p>
                <router-link to="/index/">
                    <i class="yo-ico">&#xe697;</i>
                </router-link>
                <span>全部类目</span>
            </p>
        </header>
        <section class="section">
            <div class="leftBar">
                <div class="left leftActive" v-for="(item,ind) in all.title">{{item}}</div>
            </div>
            <div class="rightBar">
                <div v-for="(item,ind) in imgs.info">
                    <img :src="item.img" alt=""/><span>{{item.text}}</span>
                </div>
                <div></div>
            </div>
        </section>
    </div>
</template>
<script type="es6">
    export default {
    name: 'hobby',
    data(){
        return {
            all:[],
            curindex: 0,
            imgs:[]
        }
    },
    mounted(){
        var _this = this;
        this.$http.get('/static/mock/allType.json')
                .then(
                (data)=> {
            var data = data.data;
            this.all = data.all;
            this.imgs=data.today
        },
        ()=> {
            alert('error')
        });
    }
}

</script>
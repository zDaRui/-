<template>
    <div class="info hobby">
        <header class="header">
            <p>
                <router-link to="/hobby">
                    <i class="yo-ico">&#xe697;</i>
                </router-link>
                <span>返回</span>
            </p>
        </header>
        <img :src="img" alt=""/>
    </div>
</template>
<script type="es6">
export default{
    data(){
        return{
            img:''
        }
    },
    mounted(){
        console.log(this.$route.query);
        this.img=this.$route.query.img;
    }
}
</script>
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs">

                <router-link to="/entry" v-if="index==2">
                    <img :src="img"/>
                </router-link>
                <img :src="img" v-else/>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
        return {
            imgs:[
                "/static/images/scroll01 (2).jpg",
                "/static/images/scroll01 (3).jpg",
                "/static/images/scroll01 (5).jpg"
            ]
        }
    }
    }
    setTimeout(function(){
        new Swiper(".swiper-container", {
                      pagination: '.swiper-pagination',
                      effect: 'coverflow',
                      grabCursor: true,
                      centeredSlides: true,
                      slidesPerView: 'auto',
                      coverflow: {
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true
                      }
                  })
    })


</script>
<style scoped>
    .swiper-container, .swiper-wrapper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide img {
        width: 100%;
        height: auto;
    }

    .swiper-slide a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
</style>

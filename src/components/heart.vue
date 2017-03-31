<template>
    <div class="heart">
        <header class="header">
            <i class="yo-ico search">&#x348d;</i>
            <span>养护心经</span>
            <i class="yo-ico more">&#xe64e;</i>
        </header>
        <section class='banner'>
            <ul class="nav">
                <li class="bg">
                    {{all.title}}
                </li>
                <li>
                    {{life.title}}
                </li>
                <li>
                    {{pic.title}}
                </li>
                <li>
                    {{week.title}}
                </li>
            </ul>
            <div class="swiper-container swiper-Two">
                <div class="swiper-wrapper ">
                    <div class="swiper-slide  scroll">
                        <div class="content">
                            <img :src="all.imgs" alt="" class="info"/>
                            <p>
                                <img src="../../static/images/icon_03.jpg" alt=""/>
                                <span>养护贴士</span>
                            </p>
                        </div>
                        <div class="list">
                            <dl v-for="item in all.info">
                                <dt>
                                    <img :src="item.img" alt=""/>
                                </dt>
                                <dd>
                                    <h4>{{item.title}}</h4>
                                    {{item.text}}
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="content">
                            <img :src="life.imgs" alt="" class="info"/>
                            <p>
                                <img src="../../static/images/icon_03.jpg" alt=""/>
                                <span>养护贴士</span>
                            </p>
                        </div>
                        <div class="list">
                            <dl v-for="item in life.info">
                                <dt>
                                    <img :src="item.img" alt=""/>
                                </dt>
                                <dd>
                                    <h4>{{item.title}}</h4>
                                    {{item.text}}
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="content">
                            <img :src="pic.imgs" alt="" class="info"/>
                            <p>
                                <img src="../../static/images/icon_03.jpg" alt=""/>
                                <span>养护贴士</span>
                            </p>
                        </div>
                        <div class="list">
                            <dl v-for="item in pic.info">
                                <dt>
                                    <img :src="item.img" alt=""/>
                                </dt>
                                <dd>
                                    <h4>{{item.title}}</h4>
                                    {{item.text}}
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="content">
                            <img :src="week.imgs" alt="" class="info"/>
                            <p>
                                <img src="../../static/images/icon_03.jpg" alt=""/>
                                <span>养护贴士</span>
                            </p>
                        </div>
                        <div class="list">
                            <dl v-for="item in week.info">
                                <dt>
                                    <img :src="item.img" alt=""/>
                                </dt>
                                <dd>
                                    <h4>{{item.title}}</h4>
                                    {{item.text}}
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="es6">
    import {mapActions} from "vuex"
    export default {
        name:"heart",
         data(){
        return {
            checkedNames: [],
            all: [],
            life: [],
            pic: [],
            week:[],
        }
    },
        methods:{
        ...mapActions(["changeCurIndex"])
        },
        mounted(){
            this.changeCurIndex(1)
             var _this = this;
                this.$http.get('/static/mock/heart.json')
                        .then(
                                (data)=> {
                            var data = data.data;
                            this.all = data.all;
                            this.life = data.life;
                            this.pic = data.pic;
                            this.week = data.week;
                        },
                        ()=> {
                            alert('error')
                        });
                  setTimeout(function () {
                    //swiper滑动 tab切换
                    //热点内部小swiper
                    var swiper3 = new Swiper('.swiper-Two', {
                        onSlideChangeStart: function (swiperr) {
                            var idx = swiperr.activeIndex;
                            $('.nav').children().eq(idx).addClass('bg').siblings().removeClass('bg')
                        }
                    });
                    $('.nav li').on('click', function () {
                        $(this).addClass('bg').siblings().removeClass('bg');
                        swiper3.slideTo($(this).index())
                    })
                });
        }
    }



</script>
<style scoped>

</style>
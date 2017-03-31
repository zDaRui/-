<template>
    <div class="groom">
        <header class="header">
            <i class="yo-ico search">&#x348d;</i>
            <span>每日推荐</span>
            <i class="yo-ico more">&#xe64e;</i>
        </header>
        <section class='banner'>
            <ul class="nav">
                <li class="bg">
                    {{scene.title}}
                </li>
                <li>
                    {{life.title}}
                </li>
                <li>
                    {{Beauty.title}}
                </li>
                <li>
                    {{Basket.title}}
                </li>
                <li>
                    {{Toys.title}}
                </li>
            </ul>
            <div class="swiper-container swiper-Two">
                <div class="swiper-wrapper ">
                    <div class="swiper-slide  scroll">
                        <div class="content">
                            <div class="swiper-container swiper_ban">
                                <div class="swiper-wrapper ">
                                    <div class="swiper-slide" v-for="(item,ind) in scene.info">
                                        <img :src="item.img" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="flower_list">
                                <p class="title">
                                    <img src="../../static/images/icon_03.jpg" alt=""/>
                                    <span>养护贴士</span>
                                </p>
                                <dl v-for="(item,ind) in scene.list">
                                    <dt>
                                        <img :src="item.img" alt=""/>
                                    </dt>
                                    <dd>
                                        <p class="title">
                                            <img src="../../static/images/icon_03.jpg" alt=""/>
                                            <span>{{item.text}}</span>
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <dl v-for="item in life.info">
                            <dt>
                                <img :src="item.img" alt=""/>
                            </dt>
                            <dd>
                                <p class="title">
                                    <img src="../../static/images/icon_03.jpg" alt=""/>
                                    <span>{{item.text}}</span>
                                </p>
                            </dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl v-for="item in Beauty.info">
                            <dt>
                                <img :src="item.img" alt=""/>
                            </dt>
                            <dd>
                                <p class="title">
                                    <img src="../../static/images/icon_03.jpg" alt=""/>
                                    <span>{{item.text}}</span>
                                </p>
                            </dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl v-for="item in Basket.info">
                            <dt>
                                <img :src="item.img" alt=""/>
                            </dt>
                            <dd>
                                <p class="title">
                                    <img src="../../static/images/icon_03.jpg" alt=""/>
                                    <span>{{item.text}}</span>
                                </p>
                            </dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl v-for="item in Toys.info">
                            <dt>
                                <img :src="item.img" alt=""/>
                            </dt>
                            <dd>
                                <p class="title">
                                    <img src="../../static/images/icon_03.jpg" alt=""/>
                                    <span>{{item.text}}</span>
                                </p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script type="es6">
    import {mapActions} from "vuex"
    export default {
        name:"groom",
         data(){
        return {
            checkedNames: [],
            scene: [],
            life: [],
            Beauty: [],
            Basket:[],
            Toys:[]
            }
        },
        mounted(){
            this.changeCurIndex(3)
            var _this = this;
            this.$http.get('/static/mock/data1.json')
                    .then(
                    (data)=> {
                var data = data.data;
                this.scene = data.scene;
                this.life = data.life;
                this.Beauty = data.Beauty;
                this.Basket = data.Basket;
                this.Toys = data.Toys;
            },
            ()=> {
                alert('error')
            });
            setTimeout(function () {
                //swiper滑动 tab切换
                //热点内部小swiper
                var swiperr = new Swiper('.swiper-Two', {
                    onSlideChangeStart: function (swiperr) {
                        var idx = swiperr.activeIndex;
                        $('.nav').children().eq(idx).addClass('bg').siblings().removeClass('bg')
                    }
                });
                $('.nav li').on('click', function () {
                    $(this).addClass('bg').siblings().removeClass('bg');
                    swiperr.slideTo($(this).index())
                })
            });
            setTimeout(function(){
                var swiper2 = new Swiper('.swiper_ban',{
                    autoplay:2000,
                    loop:true
                });
            },1000)
            //iscroll滚动
            var wraps = new IScroll('.scroll', {
                shrinkScrollbars: 'scale',
                probeType: 3,
                bindToWrapper: true,
                mouseWheel: false,
                click:true,
                preventDefault: false
            });
        },
            methods:{
                ...mapActions(["changeCurIndex"])
            }
    }

</script>
<style scoped>

</style>
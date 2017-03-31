<template>
    <div class="home" id="home">
        <header class="header">
            <i class="yo-ico search">&#x348d;</i>
            <span>flower</span>
            <router-link to="/all">
                <i class="yo-ico more">&#xe64e;</i>
            </router-link>
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
                            <div class="type">
                                <dl>
                                    <router-link to="/hobby">
                                        <dt>
                                            <i class="yo-ico">&#xe629;</i>
                                        </dt>
                                        <dd>
                                            猜你喜欢
                                        </dd>
                                    </router-link>
                                </dl>
                                <dl>
                                    <dt>
                                        <i class="yo-ico">&#xe631;</i>
                                    </dt>
                                    <dd>
                                        蛋糕
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>
                                        <i class="yo-ico">&#xe63a;</i>
                                    </dt>
                                    <dd>
                                        卡通花束
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>
                                        <i class="yo-ico">&#xe602;</i>
                                    </dt>
                                    <dd>
                                        商业花篮
                                    </dd>
                                </dl>
                            </div>
                            <div class="flower_list">
                                <p>
                                    <span>A</span>
                                    <strong>热卖推荐</strong>
                                    <small>more>></small>
                                </p>
                                <dl v-for="(item,ind) in scene.list">
                                    <dt>
                                        <img :src="item.img" alt=""/>
                                    </dt>
                                    <dd>
                                        <h4>{{item.text}}</h4>
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
                                <strong>{{item.text}}</strong>
                            </dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl v-for="item in Beauty.info">
                            <dt>
                                <img :src="item.img" alt=""/>
                            </dt>
                            <dd>
                                <strong>{{item.text}}</strong>
                            </dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl v-for="item in Basket.info">
                            <dt>
                                <img :src="item.img" alt=""/>
                            </dt>
                            <dd>
                                <strong>{{item.text}}</strong>
                            </dd>
                        </dl>
                    </div>
                    <div class="swiper-slide">
                        <dl v-for="item in Toys.info">
                            <dt>
                                <img :src="item.img" alt=""/>
                            </dt>
                            <dd>
                                <strong>{{item.text}}</strong>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: 'home',
    data(){
        return {
            checkedNames: [],
            scene: [],
            life: [],
            Beauty: [],
            Basket:[],
            Toys:[],
            curindex: 0,
        }
    },
    methods:{
    ...mapActions(["changeCurIndex"])
    },
    mounted(){
        this.changeCurIndex(0)
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
    }
}




</script>

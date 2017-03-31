<template>
    <div class="user">
        <header class="header">
            <p>
                <span>我的</span>
                <i class="yo-ico">&#xe625;</i>
            </p>
        </header>
        <section class="user_content">
            <div class="My_info">
                <div class="title">
                    <dl>
                        <dt>
                            <img src="../../static/images/my_03.jpg" alt=""/>
                        </dt>
                        <dd>
                            <div>
                                <strong>Guairui</strong>
                                <br/>
                            <span>
                                修改资料
                                <i class="yo-ico">&#xe7af;</i>
                            </span>
                            </div>
                            <i class="yo-ico right">&#xf0180;</i>
                        </dd>
                    </dl>
                </div>
                <div class="mes">
                    <dl>
                        <dt>
                            <i class="yo-ico">&#xe605;</i>
                        </dt>
                        <dd>
                            待付款
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <i class="yo-ico">&#xe618;</i>
                        </dt>
                        <dd>
                            待收货
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <i class="yo-ico">&#xe61c;</i>
                        </dt>
                        <dd>
                            全部订单
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="server">
                <ul>
                    <li>
                        <i class="yo-ico left">&#xe606;</i>
                        <strong>会员</strong>
                        <i class="yo-ico right">&#xf0180;</i>
                    </li>
                    <li>
                        <i class="yo-ico left">&#xe6c0;</i>
                        <strong>生日提醒</strong>
                        <i class="yo-ico right">&#xf0180;</i>
                    </li>
                    <li>
                        <i class="yo-ico left">&#xe626;</i>
                        <strong>我的积分</strong>
                        <i class="yo-ico right">&#xf0180;</i>
                    </li>
                    <li>
                        <i class="yo-ico left">&#xe619;</i>
                        <strong>在线咨询</strong>
                        <i class="yo-ico right">&#xf0180;</i>
                    </li>
                    <li>
                        <i class="yo-ico left">&#xe6cc;</i>
                        <strong>客服留言</strong>
                        <i class="yo-ico right">&#xf0180;</i>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script type="es6">
    import {mapActions} from "vuex"
    export default {
        name:"user",
        methods:{
        ...mapActions(["changeCurIndex"])
        },
        mounted(){
            this.changeCurIndex(4)
        }
    }
</script>
<style scoped>

</style>
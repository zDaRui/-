<template>
  <div class="index" id="index">
    <router-view></router-view>
    <footer class='footer'>
      <dl v-for='(tab,ind) in paths' :class="getIndex==ind?'active':''">
        <router-link :to="tab.path" @click="changeCurIndex(ind)">
          <dt><i class="yo-ico" v-html='tab.icon'></i></dt>
          <dd>{{tab.text}}</dd>
        </router-link>
      </dl>
    </footer>
  </div>
</template>

<script type="es6">
import store from '../vuex/store.js'
import {mapActions} from "vuex"
import {mapGetters} from "vuex"
export default {
  name: 'index',
    data(){
            return {
                curIndex: 0,
                paths: [
                    {path: '/index/', icon: '&#xe634;', text: '首页'},
                    {path: '/index/heart', icon: '&#xe629;', text: '养心护理'},
                    {path: '/index/shop', icon: '&#xe602;', text: '购物车'},
                    {path: '/index/groom', icon: '&#xe684;', text: '每日推荐'},
                    {path: '/index/user', icon: '&#xe604;', text: '我的'}
                ]
            }
        },
         computed:{
                ...mapGetters(["getIndex"])
        },
        methods:{
              ...mapActions(["changeCurIndex"])
        },
        created(){
        },
        store
}
</script>

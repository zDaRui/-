<template>
    <div class="hobby">
            <header class="header">
                <p>
                    <router-link to="/index/">
                        <i class="yo-ico">&#xe697;</i>
                    </router-link>
                    <span>猜你喜欢</span>
                </p>
            </header>
            <section class="section">
                <ul v-for="(item,ind) in scroll_info">
                    <li>
                        <router-link :to="{path:'/info',query:item[0]}">
                            <img :src="item[0].img" alt=""/>
                        </router-link>
                    </li>
                    <li class='lis2'>
                    </li>
                    <li>
                        <router-link :to="{path:'/info',query:item[1]}">
                            <img :src="item[1].img" alt="" v-if="item.length==2?true:false"/>
                            <b v-if="item.length==2?true:false">{{item[1].text}}</b>
                        </router-link>
                    </li>
                </ul>
            </section>
    </div>
</template>
<script type="es6">

export default {
    name: 'hobby',
    data(){
        return {
            hobby:[],
            curindex: 0,
            scroll_info: []
        }
    },
    methods:{
     array(data) {
                  //转为二维数组
                  var arr=[];//新的数组，二维
                  var html='';
                  for(var i=0,len=Math.ceil(data.length/2);i<len;i++){
                      arr[i] = [];
                      arr[i].push(data[i*2]);
                      data[i*2+1] && arr[i].push(data[i*2+1])
                  }
                  return arr;
              }
    },
    created(){
        var _this = this;
        this.$http.get('/static/mock/hobby.json')
                .then(
                (data)=> {
            var data = data.data;
            _this.hobby = data.hobby;
             _this.scroll_info=_this.array(_this.hobby.info);
        },
        ()=> {
            alert('error')
        });

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

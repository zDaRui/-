<template>
    <div id="app">
        <router-view class="app-view"></router-view>
    </div>
</template>

<script type="es6">
//rem 适配
import { setREM } from './script/util';
import { Alert } from 'vux';
import home from './components/home';

export default {
  components:{
    home
  },
  name: 'app',
  data (){
    return{

    }
  },
  created () {

    setREM()
    this.$http({
      url : '/api/question',
      method : 'POST',
      params : {act:"chek"}
    })
    .then(function(res){
      if(res.body.data.is_answer == 1){
        this.$router.push('/buycar')
      }else if(res.body.data.is_ziliao == 1){
        this.$router.push('/shake')
      }else if(res.body.data.is_finish == 1){
        this.$router.push('/shake')
      }
    },function(err){
      console.log(err)
    })
  }
}


</script>

<style>
    @import './style/app.css';
    html, body {
        width: 100%;
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    html{
        font-size: 100px;
    }
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        overflow: auto;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
    }
    a {
        color: #DDBA82;
    }
</style>


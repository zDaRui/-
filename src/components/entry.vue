<template>
    <div class="entry" id="entry">
        <header class="header">
            <ul>
                <li class="left">
                    <i class="yo-ico">&#xe697;</i>
                </li>
                <li>
                    <span>登录</span>
                </li>
                <li class="right">
                    <router-link to="/register">
                        <span class="regs">注册</span>
                    </router-link>
                </li>
            </ul>
        </header>
        <section class="login">
            <ul>
                <li class="txt">
                    <i class="yo-ico">&#xe624;</i>
                    <input type="text" placeholder="请输入手机号码" v-model.trim="user" @keyup="keyup"/>
                    <i class="yo-ico cancel">&#xe69a;</i>
                </li>
                <li class="txt">
                    <i class="yo-ico">&#xe6ec;</i>
                    <input type="password" placeholder="请输入密码" v-model.trim="pas" @keyup="keyup"/>
                    <i class="yo-ico cancel">&#xe639;</i>
                </li>
                <router-link to="/index" v-if="ent">
                    <li class="login_btn center">
                        登录
                    </li>
                </router-link>
                <li class="forget center">
                    忘记密码？
                </li>
            </ul>
        </section>
        <footer class='footer'>
            <ul>
                <li>-第三方登录-</li>
                <li class="third_login">
                    <i class="yo-ico qq">&#xe611;</i>
                    <i class="yo-ico wx">&#x3434;</i>
                    <i class="yo-ico wb">&#xe60c;</i>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script type="es6">
export default {
  name: 'entry',
  data(){
      return{
         ent:false,
          user:null,
          pas:null
      }
  },
methods:{
    keyup(){
        if(this.user && this.pas){
            this.ent=true
        }
    }
}
}

</script>

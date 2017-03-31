<template>
    <div class="reg" id="entry">
        <header class="header">
            <ul class="header">
                <li class="left">
                    <i class="yo-ico">&#xe697;</i>
                </li>
                <li>
                    <span>注册</span>
                </li>
                <li class="right">
                    <router-link to="/index">
                        <span class="regs">登录</span>
                    </router-link>
                </li>
            </ul>
        </header>
        <section class="login">
            <ul>
                <li class="txt">
                    <i class="yo-ico">&#xe624;</i>
                    <input type="text" placeholder="请输入手机号码" v-model="newPass"/>
                    <i class="yo-ico cancel">&#xe69a;</i>
                </li>
                <li class="txt">
                    <i class="yo-ico">&#xe6ec;</i>
                    <input type="password" placeholder="请输入密码"/>
                    <i class="cancel code" style="color: #fd6177;font-size: 8px">发送验证码</i>
                </li>
                <li class="txt">
                    <i class="yo-ico">&#xe6ec;</i>
                    <input type="password" placeholder="请再次输入密码"/>
                    <i class="yo-ico cancel">&#xe639;</i>
                </li>
                <router-link to="/index">
                    <li class="login_btn center">
                        登录
                    </li>
                </router-link>
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
         newPass:''
      }
  },
  methods(){
	
   }
}

</script>

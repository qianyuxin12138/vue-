<template>
    <div class="login">
        <a href="javascript:;" class="back" @click=$router.back()>
            <span class="iconfont icon-xiangzuojiantou"></span>
        </a>
        <div class="logo">
            乐乐鲜果
        </div>
        <div class="choose">
            <ul>
                <li @click="toggle" :class="{active1:flag===true}">短信登录</li>
                <li @click="toggle" :class="{active1:flag===false}">密码登录</li>
            </ul>
        </div>
        <form>
            <div class="login" :class="{active2:flag===false}">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                <button class="code">获取验证码</button>
                <input type="text" placeholder="验证码" v-model="code">
            </div>
            <div class="reg" :class="{active2:flag===true}">
                <input type="text" maxlength="11" placeholder="用户名" v-model="form.userName">
                <input type="text" placeholder="密码" v-model="form.password">
            </div>
            <div class="tips">
                温馨提示：未注册乐乐鲜果帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
            </div>
            <button class="login_btn" @click="login()">登录</button>
        </form>
        <a href="" class="us"><p>关于我们</p></a>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
import { loginPost } from "../../api";

export default {
  data() {
    return {
      flag: true,
      phone: "", // 手机号
      code: "", // 短信验证码
      form: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    },
    login() {
      if (this.flag) {
        //短信登录
      } else {
        //密码登录
        loginPost(this.form).then(res => {
          if (res.data.status) {
            alert("登录成功");
            console.log(res.data);
            const info = {
              userName:res.data.info.userName,
            };
            this.$store.dispatch('saveName',info.userName);//通过dispatch来调action
            localStorage.setItem("userName", JSON.stringify(info.userName));
            this.$router.push('/mine');
          } else {
            alert("用户名或密码有误");
          }
        });
      }
    }
  },
};
</script>
<style scoped>
.reg .yanzhengma {
  margin-top: 0.2rem;
}
.active2 {
  display: none;
}
.back {
  margin: 0.1rem;
}
.back .icon-xiangzuojiantou {
  font-weight: bold;
}
.choose ul {
  display: flex;
}
.choose ul li {
  font-size: 0.14rem;
  width: 0.6rem;
  height: 0.18rem;
}
.choose ul .active1 {
  border-bottom: 3px solid #03d78d;
}
.choose ul li:nth-of-type(1) {
  text-align: right;
  margin-right: 0.1rem;
  margin-left: 1.2rem;
}
.choose ul li:nth-of-type(2) {
  text-align: left;
  margin-left: 0.1rem;
}
.logo {
  width: 100%;
  text-align: center;
  height: 1.2rem;
  line-height: 1.2rem;
  color: #03d78d;
  font-weight: bold;
}
input {
  height: 0.5rem;
  line-height: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 0.14rem;
  padding-left: 0.2rem;
}
.code {
  background: none;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.14rem;
  position: absolute;
  top: 2.1rem;
  right: 0.5rem;
  color: #999;
}
.login_btn {
  width: 100%;
  background: #03d78d;
  border-radius: 5px;
  margin-top: 0.3rem;
  color: #fff;
  font-size: 0.14rem;
  height: 0.4rem;
}
form {
  width: 100%;
  box-sizing: border-box;
  padding: 0.4rem;
}
input:nth-of-type(1) {
  position: relative;
  margin-bottom: 0.3rem;
}
.tips {
  margin-top: 0.3rem;
  font-size: 0.12rem;
  color: #999;
  line-height: 0.18rem;
}
.tips a {
  color: skyblue;
}
.us p {
  width: 100%;
  text-align: center;
  color: #999;
  font-size: 0.12rem;
  height: 0.2rem;
}
</style>



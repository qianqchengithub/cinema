<template>
    <div class="login_body">
        <div>
            <input class="login_text" v-model="username" type="text" placeHolder="账户名/手机号/Email" >
        </div>
        <div>
            <input class="login_text" type="password" v-model="password" placeHolder="请输入您的密码" >
        </div>
        <!-- <div>
            <input type="text" class="login_text" v-model="verifyImg" placeHolder="请输入您的验证码"> <img @touchstart="handleToVerifyImg" src="/api2/users/verifyImg">
        </div> -->
        <div class="login_btn">
            <input type="submit" value="登录" @touchstart="handleToLogin">
        </div>
        <div class="login_link">
            <router-link to="/mine/register">立即注册</router-link>
            <router-link to="/mine/findPassword">找回密码</router-link>
        </div>
    </div>
</template>

<script>
import {mapActions } from 'vuex'
export default {
    name : 'Login',
    data() {
        return {
            username : '',
            password : '',
            verifyImg : ''
        }
    },

    methods: {
        ...mapActions('user', ['_Login', '_UpdateInfo']),

        handleToLogin(){
            this.$post('/member/login',{
                username : this.username,
                password : this.password,
                verifyImg : this.verifyImg
            })
            .then((res) => {
                if (res.code == 200) {
                    this._Login(res.resource.token).then((res) => {
                        this.$dialog.alert({
                            message: "登录成功"
                        });
                        this.$router.push('/mine/center');
                    })
                }
            })
            .catch((err) => {
                this.$dialog.alert({
                    message: err.message
                });
            })
        },
        handleToVerifyImg(ev) {
            ev.target.src = '/api2/users/verifyImg?'+Math.random();
        }
    },
}
</script>

<style scoped>
#content .login_body{  width:100%;}
.login_body .login_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.login_body .login_btn{ height:50px; margin:10px;}
.login_body .login_btn input{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.login_body .login_link{ display: flex; justify-content:space-between;}
.login_body .login_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
</style>
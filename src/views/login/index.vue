<template>
    <div class="view-login">
        <div class="vl-login-form">
            <div class="vl-form-row logo">
                <img src="https://file.iviewui.com/dev-dist/5fbd2906a125dd0ba4fbd502263ca524.png" alt="logo" />
            </div>
            <div class="vl-form-row">
                <i-input
                    type="text"
                    size="large"
                    v-model="username"
                    prefix="md-contact"
                    placeholder="请输入用户名"
                />
            </div>
            <div class="vl-form-row">
                <i-input
                    type="password"
                    size="large"
                    v-model="password"
                    prefix="md-key"
                    placeholder="请输入用户密码"
                />
            </div>
            <div class="vl-form-row captcha">
                <i-input type="text" size="large" v-model="answer" placeholder="验证码" style="width: 150px" />
                <div @click="getCaptchaInfo">
                    <img :src="captcha.b64s" alt="captcha" />
                </div>
            </div>
            <div class="vl-form-row captcha">
                <i-button @click="handleLogin" type="primary" size="large" style="width: 100%">登录</i-button>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import Network from '@/utils/network';

    export default {
        name: 'view-login',
        data: function() {
            return {
                username: '',
                password: '',
                answer: '',
                captcha: {
                    captchaId: '',
                    b64s: '',
                },
            };
        },
        mounted: function() {
            this.getCaptchaInfo();
        },
        methods: {
            async getCaptchaInfo() {
                const captchaInfo = await Network.get('/auth/captcha');

                if (captchaInfo) {
                    this.captcha = captchaInfo;
                }
            },
            async handleLogin() {
                const { username, password, answer, captcha } = this;

                if (username === '' || password === '' || answer === '') {
                    this.$Message.warning("请将信息填写完整");
                    return;
                }
                const params = { username, password, answer, captchaId: captcha.captchaId };

                const tokenInfo = await Network.post('/auth/login', params);

                if (!tokenInfo) {
                    this.getCaptchaInfo();
                    return;
                }
                sessionStorage.setItem('token', tokenInfo.token);
                this.$router.go(-1);
            }
        },
    }
</script>

<style lang="less" scoped>
    .view-login {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: #f8f8f9;
    }
    .vl-login-form {
        width: 400px;
        margin: 60px auto;
        box-sizing: border-box;
        background-color: #ffffff;
        padding: 20px 24px 40px 24px;
    }
    .vl-login-form .vl-form-row {
        margin-bottom: 14px;
    }
    .vl-login-form .vl-form-row.logo {
        display: flex;
        justify-content: center;

        img {
            width: 100px;
            display: inline-block;
        }
    }
    .vl-login-form .vl-form-row.captcha {
        display: flex;
        justify-content: space-between;

        img {
            width: 150px;
            height: 40px;
            cursor: pointer;
            display: inline-block;
            border: 1px solid #dddddd;
        }
    }
</style>
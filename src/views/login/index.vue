<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-form`">
            <div :class="[`${$prefix}-form-row`, 'logo']">
                <img src="https://file.iviewui.com/dev-dist/5fbd2906a125dd0ba4fbd502263ca524.png" alt="logo" />
            </div>
            <div :class="`${$prefix}-form-row`">
                <i-input type="text" size="large" v-model="username" prefix="md-contact" placeholder="请输入用户名" />
            </div>
            <div :class="`${$prefix}-form-row`">
                <i-input type="password" size="large" v-model="password" prefix="md-key" placeholder="请输入用户密码" />
            </div>
            <div :class="[`${$prefix}-form-row`, 'captcha']">
                <i-input type="text" size="large" v-model="answer" placeholder="验证码" style="width: 150px" />
                <div @click="getCaptchaInfo">
                    <img :src="captcha.b64s" alt="captcha" />
                </div>
            </div>
            <div :class="[`${$prefix}-form-row`, 'captcha']">
                <i-button @click="handleLogin" type="primary" size="large" style="width: 100%">登录</i-button>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>

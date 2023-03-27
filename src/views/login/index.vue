<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-form`">
            <div :class="[`${$prefix}-form-row`, 'logo']">
                <img src="https://file.iviewui.com/dev-dist/5fbd2906a125dd0ba4fbd502263ca524.png" alt="logo" />
            </div>
            <div :class="`${$prefix}-form-row`">
                <a-input placeholder="请输入用户名: example" size="large" v-model="username" />
            </div>
            <div :class="`${$prefix}-form-row`">
                <a-input placeholder="请输入用户密码: 123456" size="large" v-model="password" />
            </div>
            <div :class="[`${$prefix}-form-row`, 'captcha']">
                <a-input placeholder="验证码" v-model="answer" size="large" style="width: 150px" />
                <div @click="getCaptchaInfo" v-if="captcha.b64s">
                    <img :src="captcha.b64s" alt="captcha" />
                </div>
            </div>
            <div :class="[`${$prefix}-form-row`, 'captcha']">
                <a-button @click="handleLogin" type="primary" size="large" style="width: 100%">登录</a-button>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>

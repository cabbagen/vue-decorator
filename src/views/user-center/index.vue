<template>
    <div :class="`${$prefix}-container`">
        <common-header></common-header>
        <div :class="`${$prefix}-content`">
             <a-form-model :model="userInfo" :label-col="labelCol" :wrapper-col="wrapperCol" v-if="!!userInfo" :rules="rules">
                <a-form-model-item label="用户头像" :class="`${$prefix}-avatar-field`">
                    <a-upload
                        name="file"
                        :action="`${domain}/proxy/handle/upload`"
                        :show-upload-list="false"
                        :before-upload="beforeUpload"
                        :headers="uploadHeader"
                        @change="handleUploadChange"
                    >
                        <div :class="`${$prefix}-avatar`">
                            <img :src="userInfo.avatar" alt="avatar" />
                            <div :class="`${$prefix}-avatar-mask`">
                                <span>更换图片</span>
                            </div>
                        </div>
                    </a-upload>
                </a-form-model-item>
                <a-form-model-item label="用户昵称" ref="nickname" prop="nickname">
                    <a-input v-model="userInfo.nickname" @blur="() => $refs.nickname.onFieldBlur()" />
                </a-form-model-item>
                <a-form-model-item label="手机号码" prop="mobile">
                    <a-input v-model="userInfo.mobile" />
                </a-form-model-item>
                <a-form-model-item label="电子邮箱" prop="email">
                    <a-input v-model="userInfo.email" />
                </a-form-model-item>
                <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click="onFormSubmit">保存修改</a-button>
                </a-form-model-item>
             </a-form-model>
        </div>
    </div>
</template>
<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>

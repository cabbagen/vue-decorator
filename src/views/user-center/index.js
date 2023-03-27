import network from '@/utils/network.js';
import prefix from '@/mixins/prefix.mixin.js';
import CommonHeader from '@/components/header/index.vue';
import { Button, FormModel, Input, Upload, message } from 'ant-design-vue';

export default {
    name: 'view-user-center',
    mixins: [prefix],
    components: {
        'common-header': CommonHeader,
        'a-form-model': FormModel,
        'a-form-model-item': FormModel.Item,
        'a-input': Input,
        'a-button': Button,
        'a-upload': Upload,
    },
    data: function() {
        return {
            domain: process.env.VUE_APP_DOMAIN,
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            userInfo: null,
            uploadHeader: {
                app_key: 'AMSJJWELSW',
                token: sessionStorage.getItem('token'),
            },
            rules: {
                nickname: [{ required: true, message: '请填写用户昵称', trigger: 'blur' }],
                mobile: [
                    { required: true, message: '请填写手机号码', trigger: 'change' },
                    { pattern: /^1[3456789]\d{9}$/, message: '当前格式不正确', trigger: 'change' }
                ],
                email: [
                    { required: true, message: '请填写电子邮箱', trigger: 'change' },
                    { pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: '当前格式不正确', trigger: 'change'  }
                ],
            },
        };
    },
    mounted: function() {
        this.handleFetchUserInfo();
    },
    methods: {
        handleFetchUserInfo: function() {
            const userId = sessionStorage.getItem('userId') || '';

            network.get(`/user-service/user/${userId}`).then(result => {
                if (result.code !== 100200) {
                    message.error(result.msg);
                    return;
                }
                this.userInfo = result.data;
            });
        },
        onFormSubmit: function() {
            network.post('/user-service/user/save', this.userInfo).then(result => {
                if (result.code !== 100200) {
                    message.error(result.msg);
                    return;
                }
                message.success('修改成功');
                this.handleFetchUserInfo();
            });
        },
        beforeUpload: function(file) {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

            if (!isJpgOrPng) {
                message.error('请上传 .png 或 .jpg 格式的图片');
            }

            const isLt1M = file.size / 1024 / 1024 < 1;

            if (!isLt1M) {
                message.error('请上传 1M 以内的图片');
            }
            return isJpgOrPng && isLt1M;
        },
        handleUploadChange: function(info) {
            if (info.file.status !== 'done') {
                return;
            }
            if (!info.file.response || info.file.response.code !== 100200) {
                message.error(info.file.response.message);
                return;
            }
            message.success('头像上传成功');
            this.userInfo = Object.assign({}, this.userInfo, { avatar: `${process.env.VUE_APP_DOMAIN}/${info.file.response.data}` });
        },
    },
}

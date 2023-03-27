import network from '@/utils/network';
import prefix from '@/mixins/prefix.mixin';
import { getQuery } from '@/utils/utils';
import { Input, Button, message } from 'ant-design-vue';

export default {
    mixins: [prefix],
    name: 'view-login',
    components: {
        'a-input': Input,
        'a-button': Button,
    },
    data: function() {
        return {
            answer: '',
            password: '',
            username: '',
            captcha: {
                captchaId: '', b64s: '',
            },
        };
    },
    mounted: function() {
        this.getCaptchaInfo();
    },
    methods: {
        async getCaptchaInfo() {
            const result = await network.get('/cms/captcha');

            if (result.code !== 100200) {
                return;
            }
            this.captcha = {
                b64s: result.data.b64s,
                captchaId: result.data.captchaId,
            };
        },
        async handleLogin() {
            const { returnUrl = '/workbench/normal' } = getQuery();
            const { username, password, answer, captcha } = this;

            if (username === '' || password === '' || answer === '') {
                message.warning("请将信息填写完整");
                return;
            }

            const result = await network.post('/cms/login', { username, password, answer, captchaId: captcha.captchaId });

            if (!result.data) {
                this.getCaptchaInfo();
                return;
            }

            sessionStorage.setItem('userId', result.data.userInfo.id);
            sessionStorage.setItem('token', result.data.token);

            if (/^http/.test(returnUrl)) {
                window.location.href = returnUrl;
                return;
            }
            this.$router.replace(returnUrl);
        }
    },
}

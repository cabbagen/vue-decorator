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
            const result = await network.get('/gateway/captcha');

            if (result.status !== 200) {
                return;
            }
            this.captcha = result.data;
        },
        async handleLogin() {
            const { returnUrl = '/workbench/normal' } = getQuery();
            const { username, password, answer, captcha } = this;

            if (username === '' || password === '' || answer === '') {
                message.warning("请将信息填写完整");
                return;
            }

            const result = await network.post('/gateway/login', { username, password, answer, captchaId: captcha.captchaId });
            
            if (!result.data) {
                this.getCaptchaInfo();
                return;
            }

            sessionStorage.setItem('userId', JSON.parse(result.data.rawResponse).id);
            sessionStorage.setItem('token', result.data.token);

            this.$router.replace(returnUrl);
        }
    },
}

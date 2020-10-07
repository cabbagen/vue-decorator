import network from '@/utils/network';
import prefix from '@/mixins/prefix.mixin.js';

export default {
    name: 'view-login',
    mixins: [prefix],
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
            const captchaInfo = await network.get('/auth/captcha');

            if (!captchaInfo) {
                return;
            }
            this.captcha = captchaInfo;
        },
        async handleLogin() {
            const { username, password, answer, captcha } = this;

            if (username === '' || password === '' || answer === '') {
                this.$Message.warning("请将信息填写完整");
                return;
            }

            const tokenInfo = await network.post('/auth/login', { username, password, answer, captchaId: captcha.captchaId });
            
            if (!tokenInfo) {
                this.getCaptchaInfo();
                return;
            }
            sessionStorage.setItem('token', tokenInfo.token);
            this.$router.go(-1);
        }
    },
}

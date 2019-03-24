import BottomNav from "../../../components/layout/BottomNav.vue"

export default {
    name: "loginView",
        components: {
            "bottom-nav": BottomNav,
        },
    data() {
        return {
            logining: false,
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                ],
                password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                ]
            },
        }
    },
    mounted: function () {
        $('.main-content').height($(window).height()-200)
    },
    methods: {
        handleLogin(event) {
            let self = this;
            self.$refs.loginForm.validate((valid) => {
                if (valid) {
                    self.logining = true;
                    let loginParams = {
                        username: self.loginForm.username,
                        password: self.loginForm.password
                    };
                    self.$http.post('/api', loginParams).then(res => {
                        self.logining = false;
                        let status = res.status;
                        let statusText = res.statusText;
                        let user = res.data[0];
                        if (status !== 200) {
                            self.$message({
                                message: statusText,
                                type: 'error'
                            });
                        } else {
                            self.$message({
                                message: "登录成功",
                                type: 'success'
                            });
                            window.sessionStorage.setItem('user', JSON.stringify(user));
                            self.$router.replace({path: '/main'});
                        }
                    })
                    .catch(error => console.log(error));
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
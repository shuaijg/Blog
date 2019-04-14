
export default {
    name: "articleContentView",
    components: {
        
    },
    data() {
        return {
            articleContentData: [],
            name: "",
            total: 50,
            page: 1,
            articleDatailsForm: {
                title: '',
                key: [],
                publishTime: '',
                author: '',
                source: '',
                content: ''
            },
            rules: {
                name: [{
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur'
                    }
                ],
                region: [{
                    required: true,
                    message: '请选择活动区域',
                    trigger: 'change'
                }],
                date1: [{
                    type: 'date',
                    required: true,
                    message: '请选择日期',
                    trigger: 'change'
                }],
                date2: [{
                    type: 'date',
                    required: true,
                    message: '请选择时间',
                    trigger: 'change'
                }],
                type: [{
                    type: 'array',
                    required: true,
                    message: '请至少选择一个活动性质',
                    trigger: 'change'
                }],
                resource: [{
                    required: true,
                    message: '请选择活动资源',
                    trigger: 'change'
                }],
                desc: [{
                    required: true,
                    message: '请填写活动形式',
                    trigger: 'blur'
                }]
            }
        };
    },
   
    mounted: function () {
        $(".popUpBox").width($(window).width()*0.5);
        $(".article-wrap").height($(window).height() -80);
        this.queryArticleContentData();
    },
    methods: {
        //文章列表查询
        queryArticleContentData() { 
            let _this = this;
            _this.$http.post('/api/article/article_content').then(res => {
                _this.articleContentData = res.data;
                console.log(res.data)
                })
                .catch(error =>
                    _this.$message({
                        message: error.message,
                        type: 'error'
                    }),
                );
        },
        showArticlePopUpBox: function (row) {
            let _this = this;
            _this.articleDatailsForm = row;
            $(".popUpBox-modal.article-details,.popUpBox-modal.article-details .popUpBox").fadeIn(300);
        },
        // 关闭展开右拉框
        hidePopUpBox: function () {
            $(".popUpBox-modal.article-details,.popUpBox-modal.article-details .popUpBox").fadeOut(300);
        },
        //性别显示转换
        formatSex(row, column) {
            return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
import Utils from "../../lib/utils/Utils";
export default {
    name: "articleContentView",
    components: {
        
    },
    data() {
        return {
            name: '',
            articleContentData: [],
            total: 50,
            page: 1,
            articleDatailsForm: {
                title: '',
                key: '',
                publishTime: '',
                author: '',
                source: '',
                content: ''
            },
            rules: {
                title: [{
                        required: true,
                        message: '请输入标题名称',
                        trigger: 'blur'
                    }
                ],
                key: [{
                    required: true,
                    message: '请填写关键词',
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
        //修改文章
        updateArticleContent(articleDatailsForm) {
            let _this = this;
            _this.$refs[articleDatailsForm].validate((valid) => {
                if (valid) {
                    _this.$http.post('/api/article/update_article_content',_this.articleDatailsForm).then(res => {
                            if (res.status == 200) {
                                //_this.articleContentData.push(_this.articleDatailsForm);
                                _this.$message({
                                    message: '修改成功',
                                    type: 'success'
                                })
                            }
                        })
                        .catch(error =>
                            _this.$message({
                                message: error.message,
                                type: 'error'
                            }),
                        );
                } else {
                    console.log('error submit!!');
                    return false;
                }
                _this.hidePopUpBox();
            });
        },
        //删除文章
        deleteArticleContent(row) { 
            let _this = this;
            _this.$confirm('确定要操作吗？', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                cancelButtonClass: "cancel-btn",
                type: 'warning'
            }).then((msg) => {
                if (msg) {
                    _this.$http.post('/api/article/del_article_content', { _id: row._id }).then(res => {
                        console.log(res)
                        if (res.status == 200) {
                            _this.articleContentData.splice(row._id,1);
                            _this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                        }
                    })
                        .catch(error =>
                            _this.$message({
                                message: "删除失败",
                                type: 'error'
                            }),
                    );
                }
                 _this.hidePopUpBox();
            });
        },
        /**
         * @version 1.0
         * @author shuaijg
         * @method 日期控件值处理
         * @param dateVal,控件值
         * @param timeKey,time字段名
         */
        dateChange: function (dateVal, timeKey) {
            var _this = this;
            _this.articleDatailsForm[timeKey] = dateVal;
        },
        //添加文章
        addArticlePopUpBox() {
            let _this = this;
            _this.articleDatailsForm = Utils.wipeObjectData(_this.articleDatailsForm);
            delete _this.articleDatailsForm._id;
            $(".popUpBox-modal.article-details,.popUpBox-modal.article-details .popUpBox").fadeIn(300);
        },
        //发布文章
        saveArticleContent(articleDatailsForm) {
            let _this = this;
             _this.$refs[articleDatailsForm].validate((valid) => {
                 if (valid) {
                     _this.$http.post('/api/article/save_article_content', _this.articleDatailsForm).then(res => {
                         if (res.status == 200) { 
                             _this.articleContentData.push(_this.articleDatailsForm);
                                _this.$message({
                                    message: '发布成功',
                                    type: 'success'
                                })
                            }
                         })
                         .catch(error =>
                             _this.$message({
                                 message: error.message,
                                 type: 'error'
                             }),
                     );
                 } else {
                     console.log('error submit!!');
                     return false;
                 }
                 _this.hidePopUpBox();
             });
        },
        //文章列表查询
        queryArticleContentData() { 
            let _this = this;
            _this.$http.post('/api/article/query_article_content').then(res => {
                _this.articleContentData = res.data;
                })
                .catch(error =>
                    _this.$message({
                        message: error.message,
                        type: 'error'
                    }),
                );
        },
        showArticlePopUpBox: function (articleDatail) {
            let _this = this;
            _this.articleDatailsForm = _.cloneDeep(articleDatail);
            $(".popUpBox-modal.article-details,.popUpBox-modal.article-details .popUpBox").fadeIn(300);
        },
        //关闭展开右拉框
        hidePopUpBox: function () {
            $(".popUpBox-modal.article-details,.popUpBox-modal.article-details .popUpBox").fadeOut(300);
        },
        //性别显示转换
        formatSex(row, column) {
            return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
        }
    }
}
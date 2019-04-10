
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
        };
    },
   
    mounted: function () {
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
        //性别显示转换
        formatSex(row, column) {
            return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
        },
    }
}
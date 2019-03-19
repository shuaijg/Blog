
export default {
    name: "mainContentView",
    components: {
     
    },
      data() {
          const item = {
            date: '2016-05-02',
            name: '王小虎',
            sex: '0',
            address: '上海市普陀区金沙江路 1518 弄',
            age: '27',
            birth: '1992-03-21'
          };
          return {
            tableData: Array(10).fill(item),
            collapsed: false,
            name: "",
            total: 50,
            page: 1
          };
      },
      mounted: function() {
         
      },
      methods: {
        //性别显示转换
        formatSex: function (row, column) {
            return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
        },
      }
  }
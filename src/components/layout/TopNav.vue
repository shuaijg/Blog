<template>
    <div>
        <el-row :gutter="20" style="color:#FFFFFF;">
            <el-col :span="4"><div class="">文章</div></el-col>
            <el-col :span="4"><div class="">留言</div></el-col>
            <el-col :span="4"><div class="">用户</div></el-col>
            <el-col :span="4" :push=9>
                <div class="font20">
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        我的信息<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style src="../../css/layout/TopNav.css" scoped></style>
<script src="../../js/view/layout/TopNav.js"></script>

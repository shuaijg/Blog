<template>
    <div>
        <div class="left-sider-top">
                <span>BLOG</span>
                <!-- <span style="color:#FFFFFF;margin-right:10px;text-align:right"><i class="fa fa-bars"></i></span> -->
        </div>
        <div class="left-sider-content">
            <el-menu :default-openeds="['1']">
            <el-submenu index="1">
                <template slot="title">用户管理</template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<style src="../../css/layout/LeftSider.css" scoped></style>
<script src="../../js/view/layout/LeftSider.js"></script>


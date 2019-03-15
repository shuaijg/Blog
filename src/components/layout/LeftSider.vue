<template>
    <div>
        <div class="left-sider-top">
            <el-row :gutter="20" style="color:#FFFFFF;">
                <el-col :span="2" v-if="!isCollapse"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="18" v-if="!isCollapse"><div class="font22">Blog</div></el-col>
                <el-col :span="isCollapse ? 24 : 4"><div class="font16" @click.stop="changeCollapse"><i class="fa fa-bars"></i></div></el-col>
            </el-row>
        </div>
        <div class="left-sider-content">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
                </template>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>
            </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<style src="../../css/layout/LeftSider.css" scoped></style>
<script src="../../js/view/layout/LeftSider.js"></script>


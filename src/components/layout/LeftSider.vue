<template>
    <div>
        <div class="leftSider">
                <span>BLOG</span>
                <span style="color:#FFFFFF;margin-right:10px;text-align:right"><i class="fa fa-bars"></i></span>
        </div>
        <div>
            <el-menu :default-openeds="['1']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            </el-menu>

        </div>
    </div>
</template>

<style src="../../css/layout/LeftSider.css" scoped></style>
<script src="../../js/view/layout/LeftSider.js"></script>


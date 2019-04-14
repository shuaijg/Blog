<template>
    <div>
        <div class="left-sider-top">
            <el-row :gutter="20" style="color:#FFFFFF;">
                <el-col :span="14" v-if="!isCollapse"><div class="font22">Blog</div></el-col>
                <el-col :span="isCollapse ? 24 : 10"><div class="font16" :class="isCollapse ? 'padding-l-3' : 'padding-l-10'" @click.stop="changeCollapse"><i class="fa fa-bars"></i></div></el-col>
            </el-row>
        </div>
        <div class="left-sider-content">
            <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :unique-opened="false" :collapse-transition="true" router>
            <template v-for="(item,index) in menuData">
                <template v-if="item.dropdown">
                    <el-submenu :index="item.id" :id="item.id">
                        <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title" class="font14">{{item.name}}</span>
                        </template>
                        <el-menu-item class="font14" v-for="(childItem,childIndex) in item.children" :index="'/' + item.id + '/' + childItem.id">{{childItem.name}}</el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="'/' + item.id">
                        <template>
                        <i :class="item.icon"></i>
                        <span slot="title" class="font14">{{item.name}}</span>
                        </template>
                    </el-menu-item>
                </template>
            </template>
            </el-menu>
        </div>
    </div>
</template>

<style src="../../css/layout/LeftSider.css" scoped></style>
<script src="../../js/view/layout/LeftSider.js"></script>


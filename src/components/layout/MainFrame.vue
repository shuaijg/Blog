<template>
    <el-container style="height:100%">
        <el-container>
          <el-aside width="200px">
            <router-view name="leftSider"></router-view>
          </el-aside>
        <el-container>
            <el-header>
              <top-nav></top-nav>
            </el-header>
            <el-main>
              <router-view name="mainContent"></router-view>
            </el-main>
        </el-container>
    </el-container>
    <el-footer>
      <bottom-nav></bottom-nav>
    </el-footer>
    </el-container>
</template>

<style src="../../css/layout/MainFrame.css" scoped></style>
<script src="../../js/view/layout/MainFrame.js"></script>



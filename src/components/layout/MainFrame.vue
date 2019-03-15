<template>
    <el-container>
        <el-container>
          <el-aside :width="isCollapse ? '65px' : '200px'">
            <left-sider
            @update:isCollapse="val=>isCollapse=val"
            ></left-sider>
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
    <!-- <el-footer>
      <bottom-nav></bottom-nav> 
    </el-footer> -->
    </el-container>
</template>

<style src="../../css/layout/MainFrame.css" scoped></style>
<script src="../../js/view/layout/MainFrame.js"></script>



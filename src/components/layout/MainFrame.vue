<template>
    <el-container class="mainFrame">
        <el-container>
          <el-aside :width="isCollapse ? '65px' : '230px'" style="overflow-x: hidden;">
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
    </el-container>
</template>

<style src="../../css/layout/MainFrame.css" scoped></style>
<script src="../../js/view/layout/MainFrame.js"></script>



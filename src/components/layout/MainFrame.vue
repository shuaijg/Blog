<template>
    <el-container class="mainFrame">
        <el-container>
          <el-aside :width="isCollapse ? '65px' : '180px'" style="overflow-x: hidden;" class="border-r">
            <router-view 
            name="leftSider" 
            :menuData = menuData
            @update:isCollapse="val=>isCollapse=val"
            ></router-view>
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



<template>
    <el-container class="login">
        <el-header class="login-top" height="80px">
            <el-row type="flex" align="middle" justify="center" class="height-per100">
                <el-col :span="18" ><div class=""></div></el-col>
                <el-col :span="4" :pull="1">
                    <div class="clearfix" style="padding-top:10px;min-width:274px;">
                        <div class="login-envelope"><i class="fa fa-envelope" style="font-size:26px;" aria-hidden="true"></i></div>
                        <div class="login-email"><a class="black-color">15611771610@163.com</a></div>
                    </div></el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row type="flex" align="middle" justify="center" class="height-per100 main-content">
                <el-col :span="5">
                    <div class="bg-login">
                        <div class="text-c font20 position-r line-height-60" style="margin-top:20px;">登录</div>
                        <el-form label-width="70px" :model="loginForm" :rules="rules" ref="loginForm">
                            <el-form-item label="账号" prop="username">
                                <el-input v-model="loginForm.username" auto-complete="off" placeholder="请输入账号"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="danger" @click.native.prevent="handleLogin" :loading="logining">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="login-bottom" height="80px">
            <bottom-nav></bottom-nav> 
        </el-footer>
    </el-container>
</template>

<script src="../../js/view/login/LoginView.js"></script>
<style src="../../css/login/Login.css" scoped></style>
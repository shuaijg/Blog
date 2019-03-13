<template>
    <div class="height-per100">
        <el-row type="flex" align="middle" justify="center" class="height-per100">
            <el-col :span="6">
                <div class="grid-content bg-login">
                    <div class="text-c font20 position-r line-height-85">登录</div>
                    <el-form label-width="80px" :model="formData">
                        <el-form-item label="账号" prop="name">
                            <el-input v-model="formData.name" placeholder="请输入账号"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script src="@/js/view/login/LoginView.js"></script>
<style src="@/css/login/Login.css" scoped></style>
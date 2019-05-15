<template>
	<div class="position-r padding-20 article-wrap">
    <section class="article-content">
        <el-breadcrumb separator="/" style="margin: 3px 0 7px 0;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-col :span="24" class="toolbar">
			<el-form :inline="true">
				<el-form-item>
					<el-input v-model="name" placeholder="标题"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click.stop="queryArticleContentData">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click.stop="addArticlePopUpBox">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!-- 文章列表 -->
        <el-table :data="articleContentData" :stripe="true" :default-sort = "{prop: 'sex', order: 'descending'}" style="width: 100%;border: 1px solid #dfe6ec;">
			<el-table-column label="标题" width="140">
				<template slot-scope="scope">
                    <a @click.stop="showArticlePopUpBox(scope.row)">{{scope.row.title}}</a>
				</template>
			</el-table-column>
			<el-table-column prop="key" label="关键词" width="140">
			</el-table-column>
			<el-table-column prop="publishTime" label="发布时间" width="140" sortable>
			</el-table-column>
			<el-table-column prop="author" label="作者" width="120">
			</el-table-column>
			<el-table-column prop="source" label="来源" min-width="180" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="content" label="内容" min-width="180" show-overflow-tooltip>
			</el-table-column>
			<!-- <el-table-column prop="key" label="关键词" width="100" :formatter="formatSex" sortable>
			</el-table-column> -->
            <el-table-column label="操作" width="150">
				<template slot-scope="scope">
                    <a @click.stop="">查看评论</a>
					<a @click.stop="showArticlePopUpBox(scope.row)">修改</a>
					<a @click.stop="deleteArticleContent(scope.row)">删除</a>
				</template>
			</el-table-column>
        </el-table>
        <!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
    </section>

	<!-- 右拉 添加文章 -->
	<div class="popUpBox-modal article-details">
		<div class="popUpBox" @click.stop>
			<div class="popUpBox-content scrollBar-inner">
				<h4>文章详情
				<div class="f-r">
					<el-button @click="hidePopUpBox">关闭</el-button>
				</div>
				</h4>
				<div class="popUpBox-content-inner">
				 	<el-form :model="articleDatailsForm" :rules="rules" ref="articleDatailsForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="标题" prop="title">
						<el-input v-model="articleDatailsForm.title"></el-input>
					</el-form-item>
					<el-form-item label="关键词" prop="key">
						<el-input v-model="articleDatailsForm.key"></el-input>
					</el-form-item>
					<el-form-item label="发布时间">
						<el-date-picker
						v-model="articleDatailsForm.publishTime"
						type="datetime"
						style="width: 200px;"
						placeholder="选择日期时间"
						value-format="yyyy-MM-dd HH:mm:ss"
						@change="dateChange($event,'publishTime')">
						</el-date-picker>
					</el-form-item>
					<el-form-item label="作者" prop="author">
						<el-input v-model="articleDatailsForm.author"></el-input>
					</el-form-item>
					<el-form-item label="来源" prop="source">
						<el-input type="textarea" v-model="articleDatailsForm.source"></el-input>
					</el-form-item>
					<el-form-item label="内容" prop="content">
						<el-input type="textarea" v-model="articleDatailsForm.content"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="saveArticleContent('articleDatailsForm')" v-if="!articleDatailsForm._id">立即发布</el-button>
						<el-button type="primary" @click="updateArticleContent('articleDatailsForm')" v-else>保存</el-button>
					</el-form-item>
					</el-form>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<style src="../../css/article/ArticleContentManage.css" scoped></style>
<script src="../../js/view/article/ArticleContentManage.js"></script>
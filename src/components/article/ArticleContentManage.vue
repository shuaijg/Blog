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
					<el-button type="primary" v-on:click="">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
        <el-table :data="articleContentData" :stripe="true" :default-sort = "{prop: 'sex', order: 'descending'}" style="width: 100%;border: 1px solid #dfe6ec;">
			<el-table-column label="标题" width="140">
				<template slot-scope="scope">
                    <a @click.stop="showArticlePopUpBox(scope.row)">{{scope.row.title}}</a>
				</template>
			</el-table-column>
			<el-table-column prop="key" label="关键词" width="140">
			</el-table-column>
			<el-table-column prop="publishTime" label="发布时间" width="120" sortable>
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
					<a @click.stop="">删除</a>
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
	<div class="popUpBox-modal article-details">
		<div class="popUpBox" @click.stop>
			<div class="popUpBox-content scrollBar-inner">
				<h4>文章详情
				<div class="f-r">
					<el-button @click="hidePopUpBox">关闭</el-button>
				</div>
				</h4>
				<div class="popUpBox-content-inner">
				 	<el-form :model="articleDatailsForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="标题" prop="title">
						<el-input v-model="articleDatailsForm.title"></el-input>
					</el-form-item>
					<el-form-item label="关键词" prop="title">
						<el-input v-model="articleDatailsForm.key"></el-input>
					</el-form-item>
					<el-form-item label="发布时间" required>
						<el-col :span="11">
						<el-form-item prop="publishTime">
							<el-date-picker type="date" placeholder="选择日期" v-model="articleDatailsForm.publishTime" style="width: 100%;"></el-date-picker>
						</el-form-item>
						</el-col>
						<!-- <el-col class="line" :span="2">-</el-col>
						<el-col :span="11">
						<el-form-item prop="date2">
							<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
						</el-form-item>
						</el-col> -->
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
					<!-- <el-form-item label="活动区域" prop="region">
						<el-select v-model="ruleForm.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="活动时间" required>
						<el-col :span="11">
						<el-form-item prop="date1">
							<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
						</el-form-item>
						</el-col>
						<el-col class="line" :span="2">-</el-col>
						<el-col :span="11">
						<el-form-item prop="date2">
							<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
						</el-form-item>
						</el-col>
					</el-form-item>
					<el-form-item label="即时配送" prop="delivery">
						<el-switch v-model="ruleForm.delivery"></el-switch>
					</el-form-item>
					<el-form-item label="活动性质" prop="type">
						<el-checkbox-group v-model="ruleForm.type">
						<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
						<el-checkbox label="地推活动" name="type"></el-checkbox>
						<el-checkbox label="线下主题活动" name="type"></el-checkbox>
						<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="特殊资源" prop="resource">
						<el-radio-group v-model="ruleForm.resource">
						<el-radio label="线上品牌商赞助"></el-radio>
						<el-radio label="线下场地免费"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="活动形式" prop="desc">
						<el-input type="textarea" v-model="ruleForm.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item> -->
					</el-form>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<style src="../../css/article/ArticleContentManage.css" scoped></style>
<script src="../../js/view/article/ArticleContentManage.js"></script>
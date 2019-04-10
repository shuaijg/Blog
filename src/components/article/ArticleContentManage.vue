<template>
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
                    <a @click.stop="">{{scope.row.title}}</a>
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
			<!-- <el-table-column label="评论" min-width="180">
				<template slot-scope="scope">
                    <a @click.stop="">评论</a>
				</template>
			</el-table-column> -->
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
</template>

<style src="../../css/article/ArticleContentManage.css" scoped></style>
<script src="../../js/view/article/ArticleContentManage.js"></script>
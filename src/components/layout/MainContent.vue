<template>
	<div>
		<keep-alive>
			<component
				v-bind:is="currComponent"
			></component>
		</keep-alive>
	</div>
</template>

<script src="../../js/view/layout/MainContent.js"></script>
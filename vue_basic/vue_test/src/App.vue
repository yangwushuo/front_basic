<template>
	<div>
		<Student/>
		<hr>
		<School/>
	</div>
</template>

<script>
	//现在Student合Schoolu组件内的容器都是用相同的样式名
	//Vue会将所有组件内相同的样式名的样式算作一个
	//具体使用的是最后一个import的引入的组件的样式名(多个组件相同样式名)
	//
	import Student from './components/Student.vue';
	import School from './components/School.vue';

	export default {
		name:'App',
		components:{
			Student,
			School
		},
	}
</script>

// 如果在app内写入样式,那么它所有子组件都可以使用到该样式
//只有添加scoped才不会被别的子组件容器所使用
//lang是指定样式语言 如: css less
<style lang="css" scoped>

</style>>

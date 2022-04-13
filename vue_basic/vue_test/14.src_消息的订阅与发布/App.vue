<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<School></School>
		<hr>
		<Student></Student>
	</div>
</template>

<script>

	import Student from './components/Student.vue';
	import School from './components/School.vue';

	export default {
		name:'App',
		components:{
			Student,
			School
		},
		data() {
			return {
				msg: '你好啊'
			}
		},
	}
</script>

<style lang="css">
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
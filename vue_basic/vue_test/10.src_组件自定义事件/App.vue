<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<!-- 通过父组件给子组件传递函数类型的props实现: 子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>
		<hr>
		<!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据 第一种写法 -->
		<!-- 给Student组件绑定一个自定义事件 -->
		<!-- <Student v-on:atguigu="getStudentName"/> -->
		<!-- 绑定一次性事件 -->
		<!-- <Student v-on:atguigu.once="getStudentName"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据 第二种写法 -->
		<Student ref="stu"></Student>
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
		methods: {
			getSchoolName(name){
				console.log('App收到了学校名字:',name);
			},
			getStudentName(name,...parmes){
				console.log('App收到了学生名:',name,parmes);
			}
		},	
		mounted() {
			//app组件加载完毕后，给组件stu实体绑定一个atuguigu事件用于调用getStudentName事件
			this.$refs.stu.$on("atguigu",this.getStudentName);
			// this.$refs.stu.$once("atguigu",this.getStudentName); //绑定一次性事件

		},
	}
</script>

<style lang="css">
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
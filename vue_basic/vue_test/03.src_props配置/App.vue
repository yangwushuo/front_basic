<template>
	<div>
		<!-- 
			通过标签属性向组件内传入值 属性名="value" 
			传值默认都是字符串，如果想传入数值，则需要使用:xxx="88" 
			动态绑定执行vue渲染的时候会执行表达式算出数值 
		-->
		<Student name="Jason" sex="男" :age="20"/>
	</div>
</template>

<script>
	//引入组件
	import Student from './components/Student.vue'

	export default {
		name:'App',
		components:{
			Student
		},
	}
</script>

<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
	</div>
</template>

<script>
	//引入组件
	import School from './components/School.vue'

	export default {
		name:'App',
		components:{
			School
		},
		data() {
			return {
				msg: '这是一个消息'
			}
		},
		methods: {
			showDOM(){
				//组件通过使用$refs属性将组件内所有ref属性的标签，收录其中
				//this.$refs.ref值
				//注意如果直接使用document获取id某一个子组件，则会获取子组件模板元素template中的元素
				console.log(this.$refs.title);
				console.log(this.$refs.btn);
				console.log(this.$refs.sch);
			}
		},
	}
</script>

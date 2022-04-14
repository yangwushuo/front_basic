<template>
	<div>
		<button @click="getStudents">点击获取学生数据</button>
		<button @click="getCars">点击获取汽车数据</button>
	</div>
</template>

<script>

	import axios from 'axios';

	export default {
		name:'App',
		data() {
			return {
				//由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
				todos:JSON.parse(localStorage.getItem('todos')) || []
			}
		},
		methods: {
			getStudents(){
				axios.get('http://localhost:8080/jason/students').then(
					response =>{
						console.log('请求成功:',response.data);
					},
					error => {
						console.log('请求失败:',error.message);
					}
				)
			},
			getCars(){
				axios.get('http://localhost:8080/demo/cars').then(
					response =>{
						console.log('请求成功:',response.data);
					},
					error => {
						console.log('请求失败:',error.message);
					}
				)
			}
		},
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
		margin-left: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}

	.btn-edit {
		color: #fff;
		background-color: #077ff0;
		border: 1px solid #bd362f;
	}

	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}

	.btn-edit:hover {
		color: #fff;
		background-color: #077ff0;
	}

	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>

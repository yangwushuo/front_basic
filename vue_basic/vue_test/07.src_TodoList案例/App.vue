<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader :addTodo="addTodo"></MyHeader>
				<TheList :todoList="todoList" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></TheList>
				<MyFooter :todoList="todoList" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>
			</div>
		</div>
	</div>
</template>

<script>

	import MyHeader from './components/MyHeader.vue';
	import TheList from './components/TheList.vue';
	import MyFooter from './components/MyFooter.vue';
	
	export default {
		name:'App',
		components:{
			MyHeader,
			TheList,
			MyFooter
		},
		data() {
			return {
				todoList:[
					{
						id: '001', 
						title: '抽烟', 
						done: true
					},
					{
						id: '002', 
						title: '喝酒', 
						done: true
					},
					{
						id: '003', 
						title: '烫头', 
						done: false
					},
				]
			}
		},
		methods: {
			addTodo(value){
				this.todoList.unshift(value);
			},
			checkTodo(id){
				for (var index = 0; index < this.todoList.length; index++) {
					if(this.todoList[index].id === id){
						console.log(id+"被改变");
						this.todoList[index].done = !this.todoList[index].done;
					}
				}
			},
			deleteTodo(id){
				this.todoList = this.todoList.filter( item => item.id !== id);
			},
			checkAllTodo(done){
				this.todoList.forEach(element => {
					element.done = done;
				});
			},
			clearAllTodo(){
				this.todoList = 	this.todoList.filter(function(todoObj){
					return !todoObj.done;
				})
			}
		},
	}
</script>

<style lang="css">
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
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
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

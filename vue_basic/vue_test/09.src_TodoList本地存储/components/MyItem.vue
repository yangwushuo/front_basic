<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="changeChecked(todoObj.id)" />
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{todoObj.title}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodoObj(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
    name: 'MyItem',
    data() {
        return {
          
        }
    },
    methods: {
      changeChecked(id){
        this.checkTodo(id);
      },
      deleteTodoObj(id){
        if(confirm("确定要删除吗")){
          this.deleteTodo(id);
        }
      }
    },
    props:{
      todoObj:{
        required: true
      },
      checkTodo:{
        required: true
      },
      deleteTodo:{
        required: true
      }
    }
}
</script>

<style lang="css" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}

li:hover button{
  display: block;
}

</style>
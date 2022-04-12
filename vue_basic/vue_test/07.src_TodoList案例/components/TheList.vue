<template>
  <ul class="todo-main">
    <MyItem 
      v-for="todoObj in todoList"
     :key="todoObj.id" 
     :todoObj="todoObj" 
     :deleteTodo="deleteTodo" 
     :checkTodo="checkTodo">
    </MyItem>
  </ul>
</template>

<script>

import MyItem from './MyItem.vue';

export default {
    name: 'TheList',
    data() {
        return {
         
        }
    },
    components:{
      MyItem
    },
    props:{
      todoList:{
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
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
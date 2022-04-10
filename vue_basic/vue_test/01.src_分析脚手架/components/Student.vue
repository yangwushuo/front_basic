<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生年龄:{{age}}</h2>
        <button @click="showInfo">点我显示学生性别</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: 'Jason',
                age: '20',
                sex: '男'
            }
        },
        methods: {
            showInfo(){
                alert('学生性别'+this.sex);
            }
        },
    }
</script>

<style>
    .student{
        background-color: yellow;
        opacity: 0.3;
    }
</style>
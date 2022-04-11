<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: 'Jason',
                sex: '男'
            }
        },
    }
</script>

<style>
    .student{
        background-color: yellowgreen;
        opacity: 0.8;
    }
</style>
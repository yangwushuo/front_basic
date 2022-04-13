<template>
    <div class="box">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="sendNameToSchool">发送名字给School组件</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: 'Jason',
                sex: '男',
            }
        },
        methods: {
            sendNameToSchool(){
                //调用总线，给School组件发送数据
                this.$bus.$emit('schoolReceive',this.name);
            }
        },
    }
</script>

<style scope>
    .box{
        background-color: yellowgreen;
        opacity: 0.8;
        padding: 5px;
        margin-top: 30px;
    }
</style>
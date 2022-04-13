<template>
    <div class="box">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="sendNameToSchool">发送名字给School组件</button>
    </div>
</template>

<script>

    import pubsub from 'pubsub-js';

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
                //发送数据
                pubsub.publish("hello",this.name);
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
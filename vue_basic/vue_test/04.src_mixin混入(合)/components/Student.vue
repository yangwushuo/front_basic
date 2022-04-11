<template>
    <div class="student">
        <h2 @click="showName">学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
    </div>
</template>

<script>

    //引入外部混入mixin
    import {hunhe1, hunhe2} from '../mixin.js';

    export default {
        name: 'Student',
        data() {
            return {
                name: 'Jason',
                sex: '男'
            }
        },
        mounted() {
            console.log("这是内部生命周期回调函数mounted");
        },
        //使用混入
        mixins: [hunhe1,hunhe2]
    }
</script>

<style>
    .student{
        background-color: yellowgreen;
        opacity: 0.8;
    }
</style>
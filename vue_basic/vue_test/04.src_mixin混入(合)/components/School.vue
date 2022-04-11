<template>
    <div class="student">
        <h2 @click="showName">学校名字:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>

    import {hunhe1, hunhe2} from '../mixin.js';

    export default {
        name: 'School',
        data() {
            return {
                name: '南京大学',
                address: '南京栖霞区'
            }
        },
        mounted() {
            console.log("这是内部生命周期回调函数mounted");
        },
        mixins: [hunhe1,hunhe2]
    }
</script>

<style>
    .student{
        background-color: yellow;
        opacity: 0.8;
    }
</style>
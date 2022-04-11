<template>
    <div class="student">
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生年龄:{{myAge}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="addAge">点击年龄增加</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                msg: '我是一个来自南京的学生',
                myAge: this.age //将外部传入变量，赋予data中的属性 这样写的好处，不会去更改props中的值毕竟props是外部传入进来
            }
        },
        methods: {
            addAge(){
                this.myAge++;
            }
        },

        /* 
            总结: 接受属性是组件vc中的一个属性，如果data与props有重名的属性，props的属性会覆盖掉data，进行渲染
        */

        //简单声明接受
        // props: ['name', 'age', 'sex'],

        //接受的同时对数据进行类型限制
        /* props: {
            name: String,
            age: Number,
            sex: String
        }, */

        //接受的同时对数据，进行类型限制+默认值的指定+必要性的限制
        props: {
            name: {
                type: String, //类型限制
                required: true //必须有值，必须传入
            },
            age: {
                type: Number,
                default: 88 //如果没有传入值，使用默认值
            },
            sex: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>
    .student{
        background-color: yellow;
        opacity: 0.8;
    }
</style>
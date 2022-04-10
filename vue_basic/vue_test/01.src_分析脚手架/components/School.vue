<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showInfo">点击弹出学校所在城市</button>
    </div>
</template>

<script>

    /* const school = new Vue({
        name: 'School',
        data() {
            return {
                name: '南京大学',
                address: '南京栖霞区',
                city: '南京'
            }
        },
        methods: {
            showInfo(){
                alert("城市:",this.city);
            }
        },
    });
    export default school; */

    //简写形式
    export default {
         name: 'School',
        data() {
            return {
                name: '南京大学',
                address: '南京栖霞区',
                city: '南京'
            }
        },
        methods: {
            showInfo(){
                alert("城市:"+this.city);
            }
        },
    }
</script>

<style>
    .school{
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>
<template>
    <div class="box">
        <h2>学校名字:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sendSchoolName">发送学校名字</button>
    </div>
</template>

<script>

    export default {
        name: 'School',
        data() {
            return {
                name: '南京大学',
                address: '南京栖霞区 邮编:2221000'
            }
        },
        methods: {
            sendSchoolName(){
                console.log("发送名字");
                this.getSchoolName(this.name);
            }
        },
        props:['getSchoolName']
    }

</script>

<style scope>
    .box{
        background-color: yellow;
        opacity: 0.8;
    }
</style>
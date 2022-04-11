<template>
    <div class="student">
        <h2>学校名字:{{name}}</h2>
        <h2>学校地址:{{address | mySlice}}</h2>
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
    }

</script>

<style>
    .student{
        background-color: yellow;
        opacity: 0.8;
    }
</style>
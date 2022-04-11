<template>
    <div class="box">
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

// 使用scope,防止组件样式与其他组件样式重名,造成混淆 理解为唯一标识 标签内会添加 data-v-xxx标识
<style scope>
    .box{
        background-color: yellow;
        opacity: 0.8;
    }
</style>
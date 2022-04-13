<template>
    <div class="box">
        <h2>学校名字:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
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
          
        },
        mounted() {
            //在School组件加载完毕，为全局总线添加一个自定义事件，用于接受其他组件传来的数据
            this.$bus.$on('schoolReceive',(data) => {
                console.log("School组件接收到其他组件传来的数据", data);
            });
        },
        beforeDestroy() {
            //如果组件被销毁，那么在销毁前将该组件在bus总线内注册的自定义事件一同销毁
            this.$bus.$off('schoolReceive');
        },
    }

</script>

<style scope>
    .box{
        background-color: yellow;
        opacity: 0.8;
    }
</style>
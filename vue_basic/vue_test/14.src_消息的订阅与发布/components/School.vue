<template>
    <div class="box">
        <h2>学校名字:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>

    import pubsub from 'pubsub-js';

    export default {
        name: 'School',
        data() {
            return {
                name: '南京大学',
                address: '南京栖霞区 邮编:2221000'
            }
        },
        methods: {
            receiveMsg(msgName, data){
                console.log("接收到订阅消息发来的数据",msgName,data);
            }
        },
        mounted() {
            //组件加载完毕后就订阅消息
            this.pubId = pubsub.subscribe("hello", this.receiveMsg)
        },
        beforeDestroy() {
            //销毁组件前取消订阅，取消订阅必须根据id取消订阅
            pubsub.unsubscribe(this.pubId);
        },
    }

</script>

<style scope>
    .box{
        background-color: yellow;
        opacity: 0.8;
    }
</style>
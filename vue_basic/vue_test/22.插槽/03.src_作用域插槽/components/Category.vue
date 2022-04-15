<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 
        定义一个插槽(挖个坑，等着组件的使用者进行填充)
        为每一个插槽添加name名字，供外部指定插入
     -->
     <!-- 
         :games="games" 将数据发送给要使用该插槽的模板，方便其渲染并插入该插槽
         发送的数据格式 {games:['红色警戒','穿越火线','劲舞团','超级玛丽']} 对象数据
      -->
    <slot :games="games">我是一些默认值,当使用者没有传递具体结构时,我会出现</slot>
  </div>
</template>

<script>export default {
    name: 'Category',
    data() {
        return {
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        }
    },
    props:['title']
}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
</style>
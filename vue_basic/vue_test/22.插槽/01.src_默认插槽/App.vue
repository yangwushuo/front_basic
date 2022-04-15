<template>
	<div class="container">
    <!-- 
      在组件标签中添加标签，可以为组件内slot标签插槽进行插入使用
     -->
		<Category title="美食">
      <!--   -->
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx3.sinaimg.cn%2Flarge%2F0023uzJ9ly1h0rsw9j4gxj61hc0u0jso02.jpg&refer=http%3A%2F%2Fwx3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652583921&t=abf941351eec11985e4c148d31fa1497" alt=""/>
    </Category>
  	<Category title="游戏">
      <ul>
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
    </Category>
		<Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
	</div>
</template>

<script>
  import Category from './components/Category.vue'
	export default {
		name:'App',
		components:{
      Category
		},
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
      }
    },
	}
</script>

<style lang="css">
  .container{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  img{
      width: 100%;
  }
</style>
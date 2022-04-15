<template>
	<div class="container">
    <!-- 
      在组件标签中添加标签，可以为组件内slot标签插槽进行插入使用
     -->
		<Category title="美食">
      <!--   -->
      <img slot="center" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx3.sinaimg.cn%2Flarge%2F0023uzJ9ly1h0rsw9j4gxj61hc0u0jso02.jpg&refer=http%3A%2F%2Fwx3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652583921&t=abf941351eec11985e4c148d31fa1497" alt=""/>
      <a slot="footer"  href="javascript:;">更多美食</a>
    </Category>
  	<Category title="游戏">
      <ul slot="center">
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="javascript:;">单机游戏</a>
        <a href="javascript:;">网络游戏</a>
      </div>
    </Category>
		<Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!-- 
        template模板不会被渲染到结构中，只有里面的内容才会被渲染到结构中
          只有template才可以简写slot="" 为 v-slot:xxx
       -->
      <template v-slot:footer>
        <div class="foot">
          <a href="javasrcipt:;">经典</a>
          <a href="javasrcipt:;">经典</a>
          <a href="javasrcipt:;">经典</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
  .container, .foot{
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
<template>
	<div class="container">
    <!-- 
      在组件标签中添加标签，可以为组件内slot标签插槽进行插入使用
     -->
		<Category title="游戏">
      <!-- 
        scope用来接受插槽发送过来的数据(对象形式)赋予scope中的变量
        data={games:['红色警戒','穿越火线','劲舞团','超级玛丽']}
       -->
      <template scope="data">
        <ul>
          <li v-for="(game,index) in data.games" :key="index">{{game}}</li>
        </ul>
      </template>
    </Category>
  	<Category title="游戏">
      <template scope="data">
        <ol>
          <li v-for="(game,index) in data.games" :key="index">{{game}}</li>
        </ol>
      </template>
    </Category>
		<Category title="游戏">
      <template scope="data">
        <h4 v-for="(game,index) in data.games" :key="index">{{game}}</h4>
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
<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 第一种写法 跳转路由并携带query参数，to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
				<!-- 第二种写法 跳转路由并携带query参数，to的对象写法 -->
				<router-link
					:to="{
						//直接使用路由命名，相当于通过名字来获取路径
						name: 'detail',
						query: {
							id: m.id,
							title: m.title	
						}
					}"
				>{{m.title}}</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data() {
			return {
				messageList:[
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
			}
		},
	}
</script>
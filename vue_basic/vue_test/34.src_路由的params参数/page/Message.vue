<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 第一种写法 路径中简单使用params参数形式 -->
				<!-- <router-link :to="`/home/message/detail/${m.id}/${m.titile}`">{{m.title}}</router-link> -->
				<!-- 第二种写法 路径使用对象形式对params使用 -->
				<router-link
					:to="{
						//如果使用对象形式，中还有params参数，必须使用命名路由，不能使用路径形式
						name: 'detail',
						params: {
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
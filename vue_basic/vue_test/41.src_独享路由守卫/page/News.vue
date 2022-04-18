<template>
	<div>
		<h3 :style="{opacity:opacity}">这是一个渐变效果</h3>
		<ul>
			<li>news001</li>
			<li>news002</li>
			<li>news003</li>
		</ul>
	</div>
	
</template>

<script>
	export default {
		name:'News',
		data() {
			return {
				opacity: 1
			}
		},
		beforeDestroy() {
			console.log("Nes被销毁前");
		},
		/* 
			如果当前被展示则触发当前激活生命周期
		*/
		activated() {
			console.log('News组件被激活了')
			this.timer = setInterval(() => {
				console.log('@')
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			},16)
		},
		/* 
			如果当前组件没有被展示，比如被缓存起来，当该组件不展示的时候则触发当前非激活生命周期
		*/
		deactivated() {
			console.log('News组件失活了')
			clearInterval(this.timer)
		},
	}
</script>
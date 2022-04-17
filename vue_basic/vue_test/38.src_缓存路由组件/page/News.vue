<template>
	<ul>
		<li>news001</li>
		<li>news002</li>
		<li>news003</li>
	</ul>
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
	}
</script>
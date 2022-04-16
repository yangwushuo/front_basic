<template>
	<div class="container">
    <Count></Count>
    <hr>
    <Person></Person>
	</div>
</template>

<script>
  import Count from './components/Count.vue'
  import Person from './components/Person.vue'
	export default {
		name:'App',
		components:{
      Count,
      Person
		},
    data() {
      return {
      
      }
    },
	}
</script>

<style lang="css">

</style>
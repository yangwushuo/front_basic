<template>
  <Demo @hello="sayHello" msg="这是一段信息" school="南京大学">
    <template v-slot:testSlot1>
      <span>这是在测试插槽1</span>
    </template>
    <template v-slot:testSlot2>
      <span>这是在测试插槽2</span>
    </template>  
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue';
export default {
  name: 'App',
  components:{
    Demo,
  },
  setup(props) {
    
    function sayHello(value){
      console.log("这是父组件说的Hello",value);
    }

    return {
      sayHello
    }
  }
}
</script>



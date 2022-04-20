<template>
  <button @click="showOff">销毁/创建</button>
  <Demo v-if="off"></Demo>
</template>

<script>
import Demo from './components/Demo.vue';
import {ref} from 'vue';
export default {
  name: 'App',
  components:{
    Demo,
  },
  setup(props) {
    var off = ref(true);

    function showOff() {  
      off.value = !off.value;
    }

    return {
      off,
      showOff,
    }
  }
}
</script>



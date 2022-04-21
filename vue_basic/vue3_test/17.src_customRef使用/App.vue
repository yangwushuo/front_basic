<template>
  <input type="text" v-model="keyWord"/>
  <h1>{{keyWord}}</h1>
</template>

<script>
import {customRef} from 'vue';
export default {
  name: 'App',
  setup(props) {
    
    function myRef(value, delay){
      return customRef((track,trigger)=>{
        var timer;
        return {
          get(){
            //通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
            track();
            return value;
          },
          set(newValue){
            value = newValue;
            clearTimeout(timer)
            //延迟渲染界面s
            timer = setTimeout(()=>{
              //通知Vue去重新解析模板
              trigger();
            },delay);
          }
        }
      })
    }

    var keyWord = myRef('okay:',1000);

    return {
      keyWord
    }
  }
}
</script>



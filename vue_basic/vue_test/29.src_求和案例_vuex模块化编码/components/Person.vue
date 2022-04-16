<template>
  <div>
      <h1>人员列表</h1>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="addPerson">添加</button>
      <h2 style="color:red">求和数值:{{sum}}</h2>
      <ul>
        <li v-for="person in personList" :key="person.id">
            {{person.name}}
        </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid';
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        addPerson(){    
            //创建一个对象
            console.log;
            var p = {id: nanoid(),name: this.name, age:100};
            //可以直接使用某个模块的mutaActions，那么需要参数指定'模块名/mutaAction中方法名' 第二个参数就是数值
            //如果使用getters 不能是this.$store.personAbout.AddPerson 因为 this.$store.getters['AddPerson']
            this.$store.commit('personAbout/AddPerson', p);
            this.name = '';
        }
    },
    computed:{
        ...mapState('personAbout',{
            personList: 'personList',
        }),
        ...mapState('countAbout',{
            sum:'sum',
        })
    }
}
</script>

<style>

</style>
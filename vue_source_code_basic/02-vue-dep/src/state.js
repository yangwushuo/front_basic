import {
  observe
} from "./observe/index"

function initState(vm) {
  const opts = vm.$options
  if (opts.data) {
    initData(vm)
  }
}

function proxy(vm, target, key){
  Object.defineProperty(vm, key, {
    get(){
      return vm[target][key]
    },
    set(nv){
      vm[target][key] = nv
    }
  })
}

function initData(vm) {
  let data = vm.$options.data // data可能是函数和对象
  data = typeof data === 'function' ? data.call(vm) : data // data是用户返回的对象

  vm._data = data // 我将返回的对象找到了_data上
  // 对数据进行劫持 vue2 里面采用了一个api defineProperty
  observe(data)

  // 将vm._data 用vm来代理就可以了
  for(let key in data){
    proxy(vm, '_data', key)
  }

}

export default initState
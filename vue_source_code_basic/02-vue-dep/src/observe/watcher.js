import Dep from './dep'

let id = 0

// 1) 当我们创建渲染watcher的时候我们会把当前的渲染watcher放在Dep.target上
// 2）调用_render() 会取值走到get上
// 每个属性有一个dep （属性就是被观察者) watcher 就是观察者(属性变化了会通知观察者重新进行渲染) -> 观察这模式
class Watcher{
  constructor(vm, fn, options){
    this.id = id++
    this.renderWatcher = options // 是一个渲染watcher
    this.getter = fn // getter意味着调用这个函数可以发生取值操作
    this.deps = [] // 后续我们实现计算属性，和一些清理工作需要用到
    this.depsId = new Set()
    this.get()
  }
  addDep(dep){ // 一个组件 对应着多个属性 重复的属性也不用记录
    let id = dep.id
    if(!this.depsId.has(id)){
      this.deps.push(dep)
      this.depsId.add(id)
      dep.addSub(this) // watcher已经记住了dep了而且去重了，此时让dep也记住
    }
  }
  get(){
    Dep.target = this // 静态属性就是只有一份
    this.getter() // 会去vm上取值 vm._update(vm.render) 取name 和age
    Dep.target = null // 渲染完毕后就清空
  }
  update(){
    console.log("重新渲染");
    this.get()
  }
}

export default Watcher
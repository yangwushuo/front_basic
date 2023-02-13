import { initMixin } from "./init"
import { initLiftCycle } from "./lifecycle"

// 将所有的方法都耦合在一起
function Vue(options){ // options就是用户的选项

  this.__init(options)
}

// 扩展了init方法
initMixin(Vue)
initLiftCycle(Vue)

export default Vue
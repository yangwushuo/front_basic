// 希望重写数组中的部分方法 思路:保留原来的push等方法，重写array原型
let oldArrayProto = Array.prototype // 获取数组的原型
// newArrayProto.__proto__ = oldArrayProto
let newArrayProto = Object.create(oldArrayProto); // 复制一份

let methods = [ // 找到所有的方法
  'push',
  'pop',
  'shift',
  'unshift',
  'reverse',
  'sort',
  'splice'
] // concat slice 都不会改变原数组

methods.forEach(method => {
  // arr.push(1,2,3)
  newArrayProto[method] = function (...args) {

    const result = oldArrayProto[method].call(this, ...args) // 内部调用原来的方法，函数的劫持 切片编程
    let inserted
    let ob = this.__ob__
    switch(method){
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2) // args第三个参数是新增数据，slice获取新增数据 给到inserted
        break
      default:
        break
    }

    if(inserted){
      // 对新增的内容再次进行观测 如果是
      ob.observeArray(inserted)
    }

    return result
  }
})

export default newArrayProto
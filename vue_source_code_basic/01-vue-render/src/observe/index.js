import newArrayProto from "./array"

class ObServe{
  constructor(data){
    // Object.defineProperty 只能劫持已经存在的属性 (vue里面会为此单独写一些api $set $delect)
    Object.defineProperty(data,'__ob__',{
      value: this,
      enumerable: false // 将__ob__变成不可枚举 （循环的时候无法获取到 不然对data进行循环的时候获取到this时候会进入死循环 this包含)
    })
    if(Array.isArray(data)){
      // 这里我们可以重写数组中的方法 7个编译反法 是可以修改数组本身的
      data.__proto__ = newArrayProto // 需要保修数组原又的特性，并且可以重写部分方法
      this.observeArray(data) // 如果数组中放的是对象 可以监控到对象的变化
    }else{
      this.walk(data)
    }

  }
  walk(data){ // 循环对象 对属性依次进行劫持
    // "重新定义"属性 性能差
    Object.keys(data).forEach(key => defineReactive(data, key, data[key]))
  }
  observeArray(data){ //观测数组
    data.forEach(item => observe(item))
  }
}

export function defineReactive(target, key , value){ //闭包 属性劫持
  // 如果属性是对象 则需要再次进行一次递归劫持
  observe(value)
  Object.defineProperty(target, key, {
    get(){ //取值的时候会执行get  
      return value
    },
    set(nv){ //设置值的时候会执行set
      value = nv
    }
  }) 
}

export function observe(data){
  // 对这个对象进行劫持
  if(typeof data !== 'object' || data == null) return

  // 如果一个对象被劫持过了，那就不需要再被劫持了(要判断一个对象是否被劫持过，可以增添一个实例，用实例来判断是否被劫持过)
  return new ObServe(data)

}
const PROMISE_STATE = {
  PENDING:0,
  FULFILLED:1,
  REJECTED:2
}

class MyPromise{

  // 创建一个变量用来存储Promise的结果
  #result
  // 创建一个变量来记录Promise的状态
  #state = PROMISE_STATE.PENDING //pending 0 fulfilled 1 rejected 2

  #callbacks = []

  constructor(executor){
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }

  #resolve(value){
    // 禁止值被重复修改
    // 如果state不等于0，说明值已经被修改 函数直接返回
    if(this.#state !=  PROMISE_STATE.PENDING) return
    this.#result = value
    this.#state = PROMISE_STATE.FULFILLED // 数据填充成功
    queueMicrotask(()=>{
      this.#callbacks.forEach((callback)=>{
        callback(value)
      })
    })
  }

  // #resolve = () => {
  //     console.log(this)
  // }

  // 私有的reject() 用来存储拒绝的数据
  #reject(reason) { }

  // 添加一个用来读取数据的then方法
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject)=>{
      if (this.#state === PROMISE_STATE.PENDING) {
        this.#callbacks.push(()=>{
          resolve(onFulfilled(this.#result))
        });
      }else if (this.#state === PROMISE_STATE.FULFILLED){
        queueMicrotask(() => {
          resolve(onFulfilled(this.#result))
        })    
      }
    })
  }

}

new MyPromise((resolve, rejecet)=>{
  setTimeout(()=>{
    resolve("这是一个答案")
  },1000)
}).then(res=>{
  console.log("这是第一个then",res);
  return "这是第二个答案"
}).then(res=>{
  console.log("这是第二个then",res);
})
export default{
    //插件内创建一个install Vue会调用插件内的该函数
    //第一个参数就是Vue构造函数，其他都是用户自己传入的值
    install(Vue,x,y,z){
        console.log(x,y,z)
		//全局过滤器 //创建一个过滤去 全局使用
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})

		//定义全局指令 所有组件都可以使用 
		Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
                console.log(binding);
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		})

		//定义一个全局混入
		Vue.mixin({
			data() {
				return {
					x:100,
					y:200
				}
			},
		})

		//给Vue原型上添加一个方法（vm和vc就都能用了）
		Vue.prototype.hello = ()=>{alert('你好啊')}
    }
} 
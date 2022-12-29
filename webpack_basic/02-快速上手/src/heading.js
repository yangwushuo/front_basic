import './heading.css'  //这里引用css文件对元素进行类样式的修改 webpack希望遵循代码使用的时候在加载指定的文件 
//这里加载heading.css文件会将 heading文件一同打包
export default () => {
  const element = document.createElement('h2')
  element.classList.add('heading')
  element.textContent = 'Hello Wrold'
  element.addEventListener('click', () => {
    alert("Hello webpack")
  })

  return element
}
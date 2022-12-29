import createHeading from './heading.js'
import './main.css' //引入css文件 webpack打包时候会自动对css文件使用相应的loader进行打包
import testPic from './testPic.png' //引入一个文件资源

const heading = createHeading()

document.body.append(heading)
//添加图片标签
const img = new Image();
img.src = testPic
// document.body.append(img)

// import footerHtml from './footer.html' //使用footerHtml变量接收html文件导出的字符串
// //将html文件字符串输出到页面中'
// document.write('footerHtml')


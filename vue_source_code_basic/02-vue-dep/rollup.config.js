// rollup 默认可以导出一个对象 作为打包的配置文件
import babel from 'rollup-plugin-babel'
export default {
  input: './src/index.js', // 入口
  output: {
    file: './dist/vue.js', // 出口
    name: 'Vue', // global.vue
    format: 'umd', // esm es6模块 commonjs模块 ifile自执行函数  umd(commonjs amd)
    sourcemap: true, // 源码映射
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // 排除node_modules所有文件
    })
  ]
}
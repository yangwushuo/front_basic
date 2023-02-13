(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  // 希望重写数组中的部分方法 思路:保留原来的push等方法，重写array原型
  var oldArrayProto = Array.prototype; // 获取数组的原型
  // newArrayProto.__proto__ = oldArrayProto
  var newArrayProto = Object.create(oldArrayProto); // 复制一份

  var methods = [
  // 找到所有的方法
  'push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice']; // concat slice 都不会改变原数组

  methods.forEach(function (method) {
    // arr.push(1,2,3)
    newArrayProto[method] = function () {
      var _oldArrayProto$method;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var result = (_oldArrayProto$method = oldArrayProto[method]).call.apply(_oldArrayProto$method, [this].concat(args)); // 内部调用原来的方法，函数的劫持 切片编程
      var inserted;
      var ob = this.__ob__;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2); // args第三个参数是新增数据，slice获取新增数据 给到inserted
          break;
      }
      if (inserted) {
        // 对新增的内容再次进行观测 如果是
        ob.observeArray(inserted);
      }
      return result;
    };
  });

  var id$1 = 0;
  var Dep = /*#__PURE__*/function () {
    function Dep() {
      _classCallCheck(this, Dep);
      this.id = id$1++; // 属性的dep要收集watcher
      this.subs = []; // 这里存放着当前属性对应的watcher
    }
    _createClass(Dep, [{
      key: "depend",
      value: function depend() {
        // 这里我们不希望放重复的watcher， 而且刚才只是一个单向的关系 dep -> watcher
        // watcher 记录dep
        // this.subs.push(Dep.target)

        Dep.target.addDep(this); // 让watcher记住dep

        // dep和watcher是一个多对多的关系(一个属性可以在多个组件中使用 dep -> 多个watcher)
        // 一个组件中由多个属性组成(一个watcher 对应多个dep)
      }
    }, {
      key: "addSub",
      value: function addSub(watcher) {
        this.subs.push(watcher);
      }
    }, {
      key: "notify",
      value: function notify() {
        console.log(this.subs);
        this.subs.forEach(function (watcher) {
          return watcher.update();
        }); // 告诉watcher要更新了
      }
    }]);
    return Dep;
  }();
  Dep.target = null;

  var ObServe = /*#__PURE__*/function () {
    function ObServe(data) {
      _classCallCheck(this, ObServe);
      // Object.defineProperty 只能劫持已经存在的属性 (vue里面会为此单独写一些api $set $delect)
      Object.defineProperty(data, '__ob__', {
        value: this,
        enumerable: false // 将__ob__变成不可枚举 （循环的时候无法获取到 不然对data进行循环的时候获取到this时候会进入死循环 this包含)
      });

      if (Array.isArray(data)) {
        // 这里我们可以重写数组中的方法 7个编译反法 是可以修改数组本身的
        data.__proto__ = newArrayProto; // 需要保修数组原又的特性，并且可以重写部分方法
        this.observeArray(data); // 如果数组中放的是对象 可以监控到对象的变化
      } else {
        this.walk(data);
      }
    }
    _createClass(ObServe, [{
      key: "walk",
      value: function walk(data) {
        // 循环对象 对属性依次进行劫持
        // "重新定义"属性 性能差
        Object.keys(data).forEach(function (key) {
          return defineReactive(data, key, data[key]);
        });
      }
    }, {
      key: "observeArray",
      value: function observeArray(data) {
        //观测数组
        data.forEach(function (item) {
          return observe(item);
        });
      }
    }]);
    return ObServe;
  }();
  function defineReactive(target, key, value) {
    //闭包 属性劫持
    // 如果属性是对象 则需要再次进行一次递归劫持
    observe(value);
    var dep = new Dep(); // 每一个属性都一个dep
    Object.defineProperty(target, key, {
      get: function get() {
        //取值的时候会执行get  
        console.log("获取+1");
        if (Dep.target) {
          dep.depend(); // 让这个属性的收集器记住当前的watcher
        }

        return value;
      },
      set: function set(nv) {
        //设置值的时候会执行set
        if (nv === value) return;
        observe(nv);
        value = nv;
        console.log("更新+1");
        dep.notify(); // 通知更新
      }
    });
  }

  function observe(data) {
    // 对这个对象进行劫持
    if (_typeof(data) !== 'object' || data == null) return;

    // 如果一个对象被劫持过了，那就不需要再被劫持了(要判断一个对象是否被劫持过，可以增添一个实例，用实例来判断是否被劫持过)
    return new ObServe(data);
  }

  function initState(vm) {
    var opts = vm.$options;
    if (opts.data) {
      initData(vm);
    }
  }
  function proxy(vm, target, key) {
    Object.defineProperty(vm, key, {
      get: function get() {
        return vm[target][key];
      },
      set: function set(nv) {
        vm[target][key] = nv;
      }
    });
  }
  function initData(vm) {
    var data = vm.$options.data; // data可能是函数和对象
    data = typeof data === 'function' ? data.call(vm) : data; // data是用户返回的对象

    vm._data = data; // 我将返回的对象找到了_data上
    // 对数据进行劫持 vue2 里面采用了一个api defineProperty
    observe(data);

    // 将vm._data 用vm来代理就可以了
    for (var key in data) {
      proxy(vm, '_data', key);
    }
  }

  /*
    整体模板解析的思路: 
      1. 获取标签字符串
      2. 标签字符串形式如: 
          <div>
            <div>我是一个大帅哥</div>
            <span>{{user.name}}</span>
          </div>
      3. indexOf 获取 < 标识的位置，如果标识的位置为0 则说明遇到的是起始标签或者终止标签
      4. 使用起始标签的正则表达式进行获取 如果获取到数据说明是 起始标签(将当前起始标签进行节点打包start，再从模板字符串中删除)
        如果没有获取到数据说明是 终止标签(对终止标签进行处理end，再次从模板字符串中删除匹配到的终止标签)
      5. 如果索引下表不是0，说明不是起始标签也不是终止标签 那就是标签中的内容 对标签内容进行一次打包chars
        函数说明: 
          createASTElement 创建一个ast树的节点
          start 起始标签的处理
          end 终止标签的处理
          chars 标签内容的处理

        ast树使用说明：使用堆来存放ast树的内容  如图 模板解析ast树图例
  */

  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z]*";
  var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")");
  var startTagOpen = new RegExp("^<".concat(qnameCapture)); // 他匹配到的分组是一个 标签名  <xxx 匹配到的是开始 标签的名字
  var endTag = new RegExp("^<\\/".concat(qnameCapture, "[^>]*>")); // 匹配的是</xxxx>  最终匹配到的分组就是结束标签的名字
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; // 匹配属性
  // 第一个分组就是属性的key value 就是 分组3/分组4/分组五
  var startTagClose = /^\s*(\/?)>/; // <div> <br/>

  // vue3 采用的不是使用正则表达式去匹配

  // 对模板进行编译处理
  function parseHTML(html) {
    // html 最开始肯定是一个 <div></div>

    var ELEMENT_TYPE = 1;
    var TEXT_TYPE = 3;
    var stack = []; // 用于存放元素的
    var currentParent; // 指向的是栈中的最后一个
    var root;

    // 创建ast树的一个节点
    function createASTElement(tag, attrs) {
      return {
        tag: tag,
        attrs: attrs,
        type: ELEMENT_TYPE,
        children: [],
        // 孩子
        parent: null
      };
    }

    // 构建开始标签
    function start(tag, attrs) {
      var node = createASTElement(tag, attrs); // 获取一个节点
      if (!root) {
        // 如果没有根节点则赋值
        root = node;
      }
      if (currentParent) {
        // 如果当前节点已经存在
        // 1.将新节点的父亲设置为当前节点
        node.parent = currentParent;
        // 2.将父节点也就是当前节点孩子设置为该新节点
        currentParent.children.push(node);
      }
      // 将新节点放入栈中
      stack.push(node);
      // 将当前节点指针修改为最新的节点
      currentParent = node;
    }

    // 构建标签内容
    function chars(text) {
      text = text.replace(/\s+/g, ''); //清除空格
      // 将当前内容节点添加到当前节点指针的孩子队列中
      text && currentParent.children.push({
        text: text,
        type: TEXT_TYPE,
        parent: currentParent // 内容父节点为最新节点
      });
    }

    // 构建结尾标签
    function end(tag) {
      // 如果是最后一个标签则肯定与栈中最新节点匹对
      stack.pop(); // 弹出最新节点
      // 将最新节点设置为上一个父节点
      currentParent = stack[stack.length - 1];
    }

    // 截取模板的字符串
    function advance(n) {
      html = html.substring(n);
    }

    // 解析标签开头
    function parseStartTag() {
      var start = html.match(startTagOpen); // 解析起始标签获取标签名与标签属性
      if (start) {
        var match = {
          tagName: start[1],
          // 标签名
          attrs: []
        };
        advance(start[0].length); // 截取html字符串
        // 如果不是开始的标签的结束 就一直匹配下去
        var attr, _end; // attr 标签中的属性 end 标签的结尾 >
        // 如果匹配到标签结尾则结束循环 功能: 获取标签中的属性
        while (!(_end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push({
            name: attr[1],
            value: attr[3] || attr[4] || attr[5] || true
          });
        }
        // end 标签的结尾 > 
        if (_end) {
          // 截取最后的结尾标识 >
          advance(_end[0].length);
        }

        // 返回结果
        return match;
      }

      // 没有匹配到
      return false;
    }

    // 循环html字符串
    while (html) {
      // 如果textEnd 为0 说明是一个开始标签或者结束标签
      // 如果textEnd > 0 说明就是文本的结束位置
      var textEnd = html.indexOf('<'); // 如果indexOf中的索引是0 则说明是个标签(开始与结束的标签)
      if (textEnd == 0) {
        var startTagMatch = parseStartTag(); // 开始标签的匹配结果
        if (startTagMatch) {
          // 解析到的开始标签
          start(startTagMatch.tagName, startTagMatch.attrs);
          continue;
        }
        var endTagMatch = html.match(endTag); // 结束标签的匹配结果
        if (endTagMatch) {
          advance(endTagMatch[0].length);
          end(endTagMatch[1]);
          continue;
        }
      }
      // 如果 < 下标不为0说明有内容
      if (textEnd > 0) {
        var text = html.substring(0, textEnd); // 直接提取文本内容
        if (text) {
          // 如果有文本则执行次操作
          chars(text);
          advance(text.length); // 解析到的文本
        }
      }
    }

    return root;
  }

  /* 
    ast树构建思路
      _c 标签 _v 内容 _s 模板语法
    判断是否有孩子树，如果有子递归调用构建 直到没有孩子树则返回
  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g; // {{ asdsadsa }}  匹配到的内容就是我们表达式的变量
  function gen(node) {
    if (node.type === 1) {
      // 标签节点
      return codegen(node);
    } else {
      // 文本节点
      var text = node.text;
      if (!defaultTagRE.test(text)) {
        // 判断是否为{{xxxx}} 模板标识符
        return "_v(".concat(JSON.stringify(text), ")");
      } else {
        // _v(_s(name)+'hello'+_s(age))
        var tokens = [];
        var match;
        var lastIndex = 0;
        defaultTagRE.lastIndex = 0; // 重置正则索引位置
        while (match = defaultTagRE.exec(text)) {
          // 如果 match有值
          var index = match.index; // 匹配开始的索引下标记 {{name}} hello {{age}} hello
          if (index > lastIndex) {
            // 如果当前下标大于上一个下表说明中间夹杂着字面量值
            // 将字面量添加到token中
            tokens.push(JSON.stringify(text.slice(lastIndex, index)));
          }
          // 将匹配到的模板标识添加到tokens中
          tokens.push("_s(".concat(match[1].trim(), ")"));
          lastIndex = index + match[0].length; // 更新最新索引值
        }
        // 判断如果出现这种情况 {{name}} hello 需要单独处理
        if (lastIndex < text.length) {
          tokens.push(JSON.stringify(text.slice(lastIndex)));
        }
        return "_v(".concat(tokens.join('+'), ")"); // {{name}}+hello+{{age}}+hello
      }
    }
  }

  function genProps(attrs) {
    /*
      attrs参数: [{name:id, value:app },{name:style, value:color:red;background-color:red }]
      预期结果: {id:"app",style:{"color":"red"}}
    */

    var str = ''; // {name, value}
    var _loop = function _loop() {
      var attr = attrs[i];
      // 判断如果是style内联样式则单独处理
      if (attr.name === 'style') {
        // color:red;background-color:red => {color: 'red', background-color: 'red' }
        var obj = {};
        attr.value.split(';').forEach(function (item) {
          var _item$split = item.split(':'),
            _item$split2 = _slicedToArray(_item$split, 2),
            key = _item$split2[0],
            value = _item$split2[1];
          value && (obj[key] = value.trim());
        });
        attr.value = obj;
      }
      str += "".concat(attr.name, ":").concat(JSON.stringify(attr.value), ",");
    };
    for (var i = 0; i < attrs.length; i++) {
      _loop();
    }
    return "{".concat(str.slice(0, -1), "}"); // 去掉结尾逗号
  }

  function genChildren(children) {
    return children.map(function (child) {
      return gen(child);
    }).join(',');
  }
  function codegen(ast) {
    var children = genChildren(ast.children);
    var tag = ast.tag;
    var attrs = ast.attrs.length ? genProps(ast.attrs) : 'null';
    var tagChildren = ast.children.length ? ",".concat(children) : '';
    var code = "_c('".concat(tag, "', \n    ").concat(attrs, "\n    ").concat(tagChildren, "\n    )");
    return code;
  }
  function complieToFunction(html) {
    // 1.就是将template 转换成ast语法树
    var ast = parseHTML(html);
    console.log(ast);

    // 2.生成render (render 方法执行后的返回的结果就是 虚拟DOM)
    // 模板引擎的实现原理就是 with + new Function
    var code = codegen(ast);
    code = "with(this){return ".concat(code, "}"); // 使用with 那么函数体内的name.age 等对象属性都会去this中寻找 
    var render = new Function(code); // 根据代码生成render函数

    //  _c('div',{id:'app'},_c('div',{style:{color:'red'}},  _v(_s(vm.name)+'hello'),_c('span',undefined,  _v(_s(age))))
    console.log(render);
    return render;
  }

  function createElementVNode(vm, tag, data) {
    if (data == null) data = {};
    var key = data.key;
    if (key) {
      delete data.key;
    }
    for (var _len = arguments.length, children = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      children[_key - 3] = arguments[_key];
    }
    return vnode(vm, tag, key, data, children);
  }
  function createTextVNode(vm, text) {
    return vnode(vm, undefined, undefined, undefined, undefined, text);
  }
  function vnode(vm, tag, key, data, children, text) {
    return {
      vm: vm,
      tag: tag,
      key: key,
      data: data,
      children: children,
      text: text
    };
  }

  var id = 0;

  // 1) 当我们创建渲染watcher的时候我们会把当前的渲染watcher放在Dep.target上
  // 2）调用_render() 会取值走到get上
  // 每个属性有一个dep （属性就是被观察者) watcher 就是观察者(属性变化了会通知观察者重新进行渲染) -> 观察这模式
  var Watcher = /*#__PURE__*/function () {
    function Watcher(vm, fn, options) {
      _classCallCheck(this, Watcher);
      this.id = id++;
      this.renderWatcher = options; // 是一个渲染watcher
      this.getter = fn; // getter意味着调用这个函数可以发生取值操作
      this.deps = []; // 后续我们实现计算属性，和一些清理工作需要用到
      this.depsId = new Set();
      this.get();
    }
    _createClass(Watcher, [{
      key: "addDep",
      value: function addDep(dep) {
        // 一个组件 对应着多个属性 重复的属性也不用记录
        var id = dep.id;
        if (!this.depsId.has(id)) {
          this.deps.push(dep);
          this.depsId.add(id);
          dep.addSub(this); // watcher已经记住了dep了而且去重了，此时让dep也记住
        }
      }
    }, {
      key: "get",
      value: function get() {
        Dep.target = this; // 静态属性就是只有一份
        this.getter(); // 会去vm上取值 vm._update(vm.render) 取name 和age
        Dep.target = null; // 渲染完毕后就清空
      }
    }, {
      key: "update",
      value: function update() {
        console.log("重新渲染");
        this.get();
      }
    }]);
    return Watcher;
  }();

  /*
    思路： 
      对ast树进行拼接的到 _c('xx',{},_c('xx',null,_v(_s({{name}})))) 字符串
      使用white + new Function 将字符串用于代码
      申明_c _v 原型函数用于创建vnode节点 ，这里的vnode节点附带子孙关系 
      将最外层vnode进行element元素创建 替换掉页面html中指定的element旧元素
  */

  function patchProps(el, props) {
    // 元素添加属性

    for (var key in props) {
      if (key === 'style') {
        for (var styleName in props.style) {
          el.style[styleName] = props.style[styleName];
        }
      } else {
        el.setAttribute(key, props[key]);
      }
    }
  }
  function createElm(vnode) {
    var tag = vnode.tag,
      data = vnode.data,
      children = vnode.children,
      text = vnode.text;
    if (typeof tag === 'string') {
      vnode.el = document.createElement(tag); // 这里将真实的节点和虚拟的节点对应起来， 后续如果修改属性了
      patchProps(vnode.el, data); // 添加相应的属性
      children.forEach(function (child) {
        vnode.el.appendChild(createElm(child)); // 元素添加子元素 child元素也是一个vnode
      });
    } else {
      // 文本
      vnode.el = document.createTextNode(text);
    }
    return vnode.el;
  }

  // 功能: 根据vnode创建element
  function patch(oldVNode, vnode) {
    // 写的式初渲染流程
    console.log(oldVNode, vnode);
    var isRealElement = oldVNode.nodeType; // 判断老元素是否存在
    if (isRealElement) {
      // 存在则创建新元素替换老元素
      var elm = oldVNode; // 获取真实元素
      var parentElm = elm.parentNode; // 拿到父元素
      var newElm = createElm(vnode); // 创建最终元素
      // Node.nextSibling 是一个只读属性，返回其父节点的 childNodes 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 null。
      // insertBefore() 方法可在已有的子节点前插入一个新的子节点。
      parentElm.insertBefore(newElm, elm.nextSibling); // 将最新元素插入老元素下面一个元素之前
      parentElm.removeChild(elm); // 删除老元素

      return newElm;
    }
  }
  function initLiftCycle(Vue) {
    Vue.prototype._update = function (vnode) {
      // 将vnode转化成真实dom
      var vm = this;
      var el = vm.$el;

      // patch即有初始化的功能 又有更新的功能
      console.log("vnode结果:", vnode);
      vm.$el = patch(el, vnode);
    };
    Vue.prototype._c = function () {
      return createElementVNode.apply(void 0, [this].concat(Array.prototype.slice.call(arguments)));
    };
    Vue.prototype._v = function () {
      return createTextVNode.apply(void 0, [this].concat(Array.prototype.slice.call(arguments)));
    };
    Vue.prototype._s = function (value) {
      if (_typeof(value) !== 'object') return value;
      return JSON.stringify(value);
    };
    Vue.prototype._render = function () {
      // 当渲染的时候会去实例中取值， 我们就可以将属性和视图绑定在一起
      return this.$options.render.call(this); // 通过ast语法转移后生成的render方法
    };
  }

  function mountComponent(vm, el) {
    // 这里的el 是通过querySelector处理过的
    vm.$el = el;

    // 1.调用render方法产生虚拟节点 虚拟DOM
    var updateComponent = function updateComponent() {
      vm._update(vm._render()); // vm.$options.render() 虚拟节点
    };

    new Watcher(vm, updateComponent, true);
    // 2.根据虚拟DOM产生真实DOM

    // 3.插入到el元素中
  }

  /*
    vue核心流程 
      1. 创造了响应式数据
      2. 模板转换成ast语法树
      3. 将ast语法树转换了render函数
      4. 后续每次数据更新可以只执行render函数(无需再次执行ast转换的过程)
          render函数会去产生虚拟节点(使用响应式数据)
          根据生成的虚拟节点创造真实的DOM
  */

  function initMixin(Vue) {
    // 就是给Vue增加init方法的
    Vue.prototype.__init = function (options) {
      // 用于初始化操作
      // vue vm.$options 就是获取用户的配置
      // 我们使用的vue的时候 $nextTick $data $attr ...
      var vm = this;
      vm.$options = options; // 将用户的选项挂载到实例上
      // 初始化状态
      initState(vm);

      // 模板解析
      if (options.el) {
        vm.$mount(options.el); // 实现数据的挂载
      }
    };

    Vue.prototype.$mount = function (el) {
      var vm = this;
      el = document.querySelector(el);
      var ops = vm.$options;
      if (!ops.render) {
        // 先进行查找有没有render函数
        var template; // 没有render看一下是否写了template 没写template采用外部的template
        if (!ops.template && el) {
          // 没有写模板 但是写了el
          template = el.outerHTML;
        } else {
          // 如果有templates属性则使用template属性 
          if (el) {
            template = ops.template; // 如果有el则采用模板的内容
          }
        }
        // 写了template就用写了的tempalte
        if (template && el) {
          // 这里需要对模板进行编译
          var render = complieToFunction(template);
          ops.render = render; // jsx 最终会被编译成功h('xxx')
        }
      }

      mountComponent(vm, el); // 组件的挂载
    };
  }

  // 将所有的方法都耦合在一起
  function Vue(options) {
    // options就是用户的选项

    this.__init(options);
  }

  // 扩展了init方法
  initMixin(Vue);
  initLiftCycle(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map

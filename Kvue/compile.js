// 用法  new Compile(el, vm)

class Compile {
    constructor(el, vm) {
        // 我们要编译的dom结点
        this.$el = document.querySelector(el);
        this.$vm = vm;


        // 编译
        if (this.$el) {
            // 转换内容为片段Fragment(内存).
            this.$fragment = this.node2Fragment(this.$el);

            // 执行编译
            this.compile(this.$fragment);
            // // 将编译完的html结果,追加至$el
            this.$el.appendChild(this.$fragment);
        }

    }

    // 将宿主中代码段拿出来遍历,这样做比较高效
    node2Fragment(el) {
        const frag = document.createDocumentFragment();
        // 将el中所有子元素放入frag中
        let child;
        while (child = el.firstChild) {
            frag.appendChild(child);
        }
        return frag;
    }
    compile(el) {
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            // 类型判断
            if (this.isElement(node)) {
                // 元素
                // console.log('编译元素' + node.nodeName);
                // 查找 k-, @, :
                const nodeAttrs = node.attributes;
                Array.from(nodeAttrs).forEach(attr => {
                    const attrName = attr.name; // 属性名
                    const exp = attr.value; // 属性值
                    if (this.isDirective(attrName)) {
                        // l-text
                        const dir = attrName.substring(2); // 拿出text

                        // 执行指令
                        this[dir] && this[dir](node, this.$vm, exp);
                    }
                    if (this.isEvent(attrName)) { // 判断是否为事件
                        const dir = attrName.substring(1); // @click
                        this.eventHandler(node, this.$vm, exp, dir);
                    }
                });
            } else if (this.isInterpolation(node)) {
                // 文本
                this.compileText(node);
            }

            // 递归子节点
            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node);
            }
        })
    }

    compileText(node) {
        // console.log(RegExp.$1);
        this.update(node, this.$vm, RegExp.$1, 'text');
    }


    // 更新函数
    update(node, vm, exp, dir) {
        const updaterFn = this[dir + 'Updater'];
        // 初始化
        updaterFn && updaterFn(node, vm.$data[exp])
        // // 依赖收集
        new Watcher(vm, exp, function(value) {
            updaterFn && updaterFn(node, value);
        })
    }

    text(node, vm, exp) {
        this.update(node, vm, exp, 'text');
    }

    textUpdater(node, value) {
        node.textContent = value;
    }


    // 处理l-model
    model(node, vm, exp) {
        // 指定input的value属性
        this.update(node, vm, exp, 'model');

        // 视图对于模型的响应
        node.addEventListener('input', e => {
            vm[exp] = e.target.value;
        })
    }

    modelUpdater(node, value) {
        node.value = value;
    }

    html(node, vm, exp) {
        this.update(node, vm, exp, 'html');
    }

    htmlUpdater(node, value) {
        node.innerHTML = value;
    }

    // 事件处理器
    eventHandler(node, vm, exp, dir) {
        let fn = vm.$options.methods && vm.$options.methods[exp];
        if (dir && fn) {
            // 给dom元素添加事件
            node.addEventListener(dir, fn.bind(vm));
        }
    }


    // 判断是否是指令
    isDirective(attr) {
        return attr.indexOf('l-') === 0;
    }

    // 判断是否是事件
    isEvent(attr) {
        return attr.indexOf('@') === 0;
    }


    isElement(node) {
        return node.nodeType === 1;
    }
    // 插值文本
    isInterpolation(node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
}
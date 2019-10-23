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

    textUpdater(node, value) {
        node.textContent = value;
    }


    isElement(node) {
        return node.nodeType === 1;
    }
    // 插值文本
    isInterpolation(node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
}
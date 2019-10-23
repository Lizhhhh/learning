// new KVue({data:{...}})

class Lz {
    constructor(options) {
        this.$options = options;

        // 数据响应式
        this.$data = options.data;
        this.$el = options.el;
        // this.observe(this.$data);

        // // 模拟一下watcher创建
        // new Watcher();
        // this.$data.test;

        // new Watcher();
        // this.$data.foo;

        new Compile(this.$el, this);

        // created执行
        if (options.created) {
            options.created.call(this);
        }
    }

    observe(value) {
        if (!value || typeof value !== 'object') {
            return
        }

        // 遍历对象
        Object.keys(value).forEach(
            key =>
            // 给每一个属性定义响应式
            {
                this.defineReactive(value, key, value[key]);
                // 代理data中的属性到vue实例上
                this.proxyData(key);
            }
        );
    }

    // 数据响应化
    defineReactive(obj, key, val) {

        // 解决浅拷贝问题
        this.observe(val);

        const dep = new Dep();

        Object.defineProperty(obj, key, {
            get() {
                Dep.target && dep.addDep(Dep.target);
                return val
            },
            set(newVal) {
              console.log(111);
                if (newVal === val) return;
                else {
                    // console.log(`${key}属性更新: ${val} --- > ${newVal}`);
                    val = newVal;
                    dep.notify();
                }
            }
        })
    }

    proxyData(key) {
        Object.defineProperty(this, key, {
            get() {
                return this.$data[key];
            },
            set(newVal) {
                this.$data[key] = newVal;
            }
        })
    }
}


// Dep: 用来管理watcher
class Dep {
    constructor() {
        // 这里存放若干依赖
        this.deps = [];
    }

    addDep(dep) {
        this.deps.push(dep)
    }

    notify() {
        this.deps.forEach(dep => dep.update())
    }
}

// Watcher: 用来做具体更新的事项
class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm; // 实例
        this.key = key; // key
        this.cb = cb; // 回调


        // 将当前watcher实例指定到Dep静态属性target中
        Dep.target = this;
        this.vm[this.key]; // 触发getter添加依赖
        Dep.target = null;
    }

    update() {
        // console.log('属性更新了');
        this.cb.call(this.vm, this.vm[this.key]);
    }
}
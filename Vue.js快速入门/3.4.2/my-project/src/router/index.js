import Vue from 'vue'  // 系统自带的
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  // @代表源代码目录
import SayHi from '@/components/SayHi'


Vue.use(Router)



export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/say_hi',
            name: 'SayHi',
            component: SayHi
        },
    ]
})

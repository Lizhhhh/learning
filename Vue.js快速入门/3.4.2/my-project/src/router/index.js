import Vue from 'vue' // 系统自带的
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' // @代表源代码目录
import SayHi from '@/components/SayHi'
import Hello from '@/components/Hello'
import BlogList from '@/components/BlogList'
import Blog from '@/components/Blog'
import TwoWayBinding from '@/components/TwoWayBinding'
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'
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
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/bloglist',
    name: 'BlogList',
    component: BlogList
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/two_way_binding',
    name: 'TwoWayBinding',
    component: TwoWayBinding
  },
  {
    path: '/form_input',
    name: 'FormInput',
    component: FormInput
  },
  {
    path: '/form_submit',
    name: 'FormSubmit',
    component: FormSubmit
  }]
})

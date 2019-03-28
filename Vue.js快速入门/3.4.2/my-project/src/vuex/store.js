import Vue from 'vue'
import Vuex from 'vuex'

// 这个就是我们后续会用到的 counter 状态
import counter from '@/vuex/moudules/counter'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vues.Store({
  modules:{
    counter
  },
  strict: debug,
  middlewares: []
})

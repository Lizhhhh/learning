import { INCREASE } from '@/vues/mutation_types'

const state = {
  points: 10
}

const getters = {
  get_points: state => {
    return state.points
  }
}

const mutations = {
  [INCREASE] (state, data){
    state.points = data
  }


}

export default {
  state,
  mutations,
  getters
}

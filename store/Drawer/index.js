import actions from './actions'
import mutations from './mutations'

const state = () => ({
  DrawerValue:''
})

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}

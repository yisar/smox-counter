import { Store } from '../smox/store'
import state from './state'
import mutations from './mutations'
import actions from './actions'

export const store = new Store({
  state,
  mutations,
  actions
})

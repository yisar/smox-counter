import { Store } from '../smox/store'
import state from './state'
import mutations from './mutations'
import actions from './actions'

const count = {
    state,
    mutations,
    actions
}
const sex = {
  state:{
    sex:'boy'
  }
}

export const store = new Store({count,sex})

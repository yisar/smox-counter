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

const logger = (store) => (next) => (mutation,payload) =>{
  console.group('触发mutation前',store.state)
  next(mutation,payload)
  console.log('触发mutation后', store.state)
console.groupEnd()
}

export const store = new Store(count,[logger])
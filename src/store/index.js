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


// import yax from 'yax';

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// const count = {
//   state: 0,
//   reducers: {
//     addDone(state, payload) {
//       return state + payload;
//     },
//     minusDone(state, payload) {
//       return state - payload;
//     }
//   },
//   actions: {
//     add({ commit }, ) {
//       commit('addDone');
//     },
//     minus({ commit }, payload) {
//       commit('minusDone', payload);
//     }
//   }
// };

// const store = yax({
//   modules: { count }
// });

// store.subscribe(() =>
//   console.log(store.getState())
// );

// store.dispatch({
//   type: 'count/add',
//   payload: 2
// });

// store.dispatch({
//   type: 'count/minus',
//   payload: 1
// });

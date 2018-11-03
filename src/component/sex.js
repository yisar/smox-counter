import React,{useReducer} from 'react'
import { useSmox } from '../smox/hook'
const mutations = {
  change(state) {
    state.sex = state.sex === 'boy' ? 'girl' : 'boy'
  }
}

const actions = {
  asyncChange({ commit }, payload) {
    setTimeout(() => {
      commit('change', payload)
    }, 1000)
  }
}

export const Sex = () => {
  const [state, commit,dispatch] = useSmox(mutations,actions, { sex: 'boy' })
  
  return (
    <div>
      {state.sex}
      <button onClick={() => commit('change')}>变性</button>
      <button onClick={() => dispatch('asyncChange')}>变性</button>
    </div>
  )
}

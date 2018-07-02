export default {
  asyncAdd({ commit }, payload) {
    setTimeout(() => {
      commit('add', payload)
    }, 1000)
  }
}
export default{
  asyncAdd({ commit }) {
    setTimeout(() => {
      commit('add')
    }, 1000)
  }
}
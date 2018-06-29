export default{
  asyncAdd({ commit }) {
    setTimeout(() => {
      commit('count/add')
    }, 1000)
  }
}
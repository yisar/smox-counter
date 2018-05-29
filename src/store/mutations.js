export default{
  add(state) {
    return {
      count: state.count + 1
    }
  },
  cut(state) {
    return {
      count: state.count - 1
    }
  }
}
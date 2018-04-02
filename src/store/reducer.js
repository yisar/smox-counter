export function counter(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'cut':
      return state - 1
    default:
      return 10
  }
}

export function add() {
  return {type: 'add'}
}

export function cut() {
  return {type: 'cut'}
}
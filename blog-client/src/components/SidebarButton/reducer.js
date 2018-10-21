import { CHANGE_SIDEBAR_DOCK } from '../../constants'

const mql = window.matchMedia(`(min-width: 800px)`);

const initialState = {
  sidebarDocked: mql.matches
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_SIDEBAR_DOCK:
      return { ...state, sidebarDocked: action.payload }
    default:
      return state
  }
}

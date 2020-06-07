import { createStore } from "redux"

const initState = {
  initialPageLoadComplete: false,
  mobileMenuVisible: false,
}

function reducer(state = initState, action) {
  switch (action.type) {
    case "INITIAL_PAGE_LOADED":
      return {
        ...state,
        initialPageLoadComplete: true
      }
    case "TOGGLE_MOBILE_MENU":
      return {
        ...state,
        mobileMenuVisible: !state.mobileMenuVisible
      }
    case "SET_MOBILE_MENU_VISIBILITY":
      return {
        ...state,
        mobileMenuVisible: action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store

import { createStore } from "redux"
import gsap from "gsap"

const initState = {
  initialPageLoadComplete: false,
  mobileMenuVisible: false,
}

function animateMobileMenu(mobileMenuVisible) {
  const tl = gsap.timeline({
    defaults: { duration: 0.26 },
  })

  if (!mobileMenuVisible) {
    tl.fromTo(
      "#mobile-navigation-backdrop",
      { opacity: 0 },
      { opacity: 1, display: "block", duration: 0.1 }
    )
    tl.fromTo(
      "#mobile-navigation",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1 }
    )
  } else {
    tl.fromTo(
      "#mobile-navigation",
      { x: 0, opacity: 1 },
      { x: -50, opacity: 0 }
    )
    tl.fromTo(
      "#mobile-navigation-backdrop",
      { opacity: 1,  },
      { opacity: 0, display: "none", duration: 0.1 }
    )
  }
}

function reducer(state = initState, action) {
  switch (action.type) {
    case "INITIAL_PAGE_LOADED":
      return {
        ...state,
        initialPageLoadComplete: true,
      }
    case "TOGGLE_MOBILE_MENU":
      animateMobileMenu(state.mobileMenuVisible)

      return {
        ...state,
        mobileMenuVisible: !state.mobileMenuVisible,
      }
    case "SET_MOBILE_MENU_VISIBILITY":
      animateMobileMenu(state.mobileMenuVisible)

      return {
        ...state,
        mobileMenuVisible: action.payload,
      }
    default:
      return state
  }
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState)
}

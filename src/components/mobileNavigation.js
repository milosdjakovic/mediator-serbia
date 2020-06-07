import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import gsap from "gsap"

const MobileNavigation = ({ children }) => {
  const initialPageLoadComplete = useSelector(
    state => state.initialPageLoadComplete
  )
  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible)
  const dispatch = useDispatch()

  // useEffect(() => {
    // const tl = gsap.timeline({
    //   defaults: { duration: 0.26 },
    // })

    // if (mobileMenuVisible) {
    //   tl.fromTo(
    //     "#mobile-navigation-backdrop",
    //     { opacity: 0 },
    //     { opacity: 1, display: "block", duration: 0.1 }
    //   )
    //   tl.fromTo(
    //     "#mobile-navigation",
    //     { x: -50, opacity: 0 },
    //     { x: 0, opacity: 1 }
    //   )
    // } else {
    //   tl.fromTo(
    //     "#mobile-navigation",
    //     { x: 0, opacity: 1 },
    //     { x: -50, opacity: 0 }
    //   )
    //   tl.fromTo(
    //     "#mobile-navigation-backdrop",
    //     { opacity: 1, display: "block" },
    //     { opacity: 0, duration: 0.1 }
    //   )
    // }
  // }, [initialPageLoadComplete, mobileMenuVisible])

  return (
    <div
      id="mobile-navigation-backdrop"
      className="z-30 bg-gray-800 bg-opacity-50 fixed inset-0 hidden"
      onClick={() =>
        dispatch({
          type: "SET_MOBILE_MENU_VISIBILITY",
          mobileMenuVisible: false,
        })
      }
    >
      <nav
        id="mobile-navigation"
        className="w-64 shadow-lg text-lg overflow-y-auto fixed inset-0 pt-20 mt-6 flex flex-col flex-shrink-0 bg-gray-800 text-gray-300 p-10 box-content"
      >
        {children}
      </nav>
    </div>
  )
}

export default MobileNavigation

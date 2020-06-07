import React from "react"
import { useDispatch } from 'react-redux'


const MobileNavigation = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="z-30 block bg-gray-800 bg-opacity-50 fixed inset-0 lg:hidden"
      onClick={() => dispatch({type: 'SET_MOBILE_MENU_VISIBILITY', mobileMenuVisible: false})}
    >
      <nav
        id="mobile-navigation"
        className="w-64 shadow-lg text-lg overflow-y-auto fixed inset-0 pt-20 mt-6 flex flex-col flex-shrink-0 bg-gray-800 text-gray-300 p-10  box-content"
      >
        {children}
      </nav>
    </div>
  )
}

export default MobileNavigation

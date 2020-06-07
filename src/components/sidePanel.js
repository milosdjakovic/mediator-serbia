import React from "react"

const SidePanel = ({children}) => {
  return (
    <nav
      id="side-panel-navigation"
      className="z-20 shadow-lg text-lg overflow-y-auto fixed inset-y-0 left-0 pt-20 mt-6 hidden lg:flex flex-col flex-shrink-0 bg-gray-800 text-gray-300 w-56 p-10 box-content"
    >
      {children}
    </nav>
  )
}

export default SidePanel

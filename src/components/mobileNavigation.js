import React from "react"
import NavLink from "./navLink"
import navigationItems from "../data/navigation-data.json"

const MobileNavigation = ({ navigationVisible, setNavigationVisibility }) => {
  return (
    <div
      className="bg-gray-800 bg-opacity-50 fixed inset-0"
      onClick={() => setNavigationVisibility(!navigationVisible)}
      role=""
    >
      <nav
        id="mobile-navigation"
        className="w-64 shadow-lg text-lg overflow-y-auto fixed inset-0 pt-20 mt-6 flex lg:hidden flex-col flex-shrink-0 bg-gray-800 text-gray-300 p-10  box-content"
        onClick={e => {
          e.stopPropagation()
        }}
      >
        {navigationItems.map((navItem, i) => {
          if (navItem.children) {
            return (
              <div className="mt-3" key={`${navItem.route}_${i}`}>
                <p className="border-b-2 pb-1 mb-2 text-gray-500 border-gray-600 my-1">
                  {navItem.name}
                </p>

                <div className="flex flex-col">
                  {navItem.children.map((childItem, j) => (
                    <NavLink
                      // onClick={() =>
                      //   setNavigationVisibility(!navigationVisible)
                      // }
                      className="py-2"
                      route={childItem.route}
                      text={childItem.name}
                      key={`${childItem.route}_${j}`}
                    />
                  ))}
                </div>
              </div>
            )
          }

          return (
            <NavLink
              // onClick={() => setNavigationVisibility(!navigationVisible)}
              className="py-2"
              route={navItem.route}
              text={navItem.name}
              key={`${navItem.route}_${i}`}
            />
          )
        })}
      </nav>
    </div>
  )
}

export default MobileNavigation

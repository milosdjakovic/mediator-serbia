import React from "react"
import navigationItems from "../data/navigation-data.json"
import NavLink from './navLink';

const Navigation = () => {
  return (
    <nav
      id="side-navigation"
      className="shadow-lg text-lg overflow-y-auto fixed inset-y-0 left-0 pt-20 mt-6 hidden lg:flex flex-col flex-shrink-0 bg-gray-800 text-gray-300 w-56 p-10 box-content"
    >
      {navigationItems.map((navItem, i) => {
        if (navItem.children) {
          return (
            <div className="my-2" key={`${navItem.route}_${i}`}>
              <p className="border-b-2 pb-1 mb-2 text-gray-500 border-gray-600 my-1">
                {navItem.name}
              </p>

              <div className="flex flex-col">
                {navItem.children.map((childItem, j) => (
                  <NavLink
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
            route={navItem.route}
            text={navItem.name}
            key={`${navItem.route}_${i}`}
          />
        )
      })}
    </nav>
  )
}

export default Navigation

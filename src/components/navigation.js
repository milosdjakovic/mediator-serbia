import React from "react"
import navigationItems from "../data/navigation-data.json"
import NavLink from './navLink';

const Navigation = () => {
  return (
    <>
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
    </>
  )
}

export default Navigation

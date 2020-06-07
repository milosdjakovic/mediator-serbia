import React from "react"
import { Link } from "gatsby"
import navigationItems from "../data/navigation-data.json"

const Navigation = () => {
  return (
    <nav id="side-navigation" className="lg:flex hidden flex-col sticky h-full border-r-2 mr-6 p-10 pr-20 top-30">
      {navigationItems.map((navItem, i) => {
        if (navItem.children) {
          return (
            <div className="" key={`${navItem.route}_${i}`}>
              <p className="text-lg border-b-2 text-gray-500 border-gray-600 my-1">{navItem.name}</p>

              <div className="ml-4 flex flex-col truncate">
                {navItem.children.map((childItem, j) => (
                  <Link 
                    to={`/${childItem.route}`} 
                    activeClassName="text-teal-400"
                    className="my-1 hover:underline"
                    key={`${childItem.route}_${j}`}
                  >
                    - {childItem.name}
                  </Link>
                ))}
              </div>
            </div>
          )
        }

        return (
          <Link 
            to={`/${navItem.route}`} 
            key={`${navItem.route}_${i}`}
            activeClassName="text-teal-400"
            className="my-1 hover:underline"
          >
            - {navItem.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation

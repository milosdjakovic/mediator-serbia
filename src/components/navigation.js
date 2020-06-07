import React from "react"
import { Link } from "gatsby"
import navigationItems from "../data/navigation-data.json"

const Navigation = () => {
  const NavLink = ({ route, text }) => (
    <Link
      to={`${route}`}
      activeClassName="rounded-md svg-state text-teal-400"
      className="flex items-center my-1 hover:underline"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hidden icon icon-tabler icon-tabler-point"
        width="14"
        height="20"
        viewBox="0 0 12 24"
        strokeWidth="2.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="3" cy="12" r="4" fill="currentColor"/>
      </svg>
      {text}
    </Link>
  )

  return (
    <nav
      id="side-navigation"
      className="text-lg overflow-y-auto fixed inset-y-0 left-0 pt-20 mt-6 flex lg:ml-0 -ml-76  flex-col flex-shrink-0 bg-gray-800 text-gray-300 w-56 p-10 box-content"
    >
      {navigationItems.map((navItem, i) => {
        if (navItem.children) {
          return (
            <div className="mt-3" key={`${navItem.route}_${i}`}>
              <p className="border-b-2 text-gray-400 border-gray-600 my-1">
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

import React from "react"
import { Link } from "gatsby"
import navigationItems from "../data/navigation-data.json"

const Navigation = () => {
  return (
    <nav>
      {navigationItems.map((navItem, i) => {
        if (navItem.children) {
          return (
            <div key={`${navItem.route}_${i}`}>
              <p>{navItem.name}</p>

              <div>
                {navItem.children.map((childItem, j) => (
                  <Link to={childItem.route} key={`${childItem.route}_${j}`}>
                    {childItem.name}
                  </Link>
                ))}
              </div>
            </div>
          )
        }

        return (
          <Link to={navItem.route} key={`${navItem.route}_${i}`}>
            {navItem.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation

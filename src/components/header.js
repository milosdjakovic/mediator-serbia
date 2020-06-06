import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import navigationItems from "../data/navigation-data.json"

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <header>
      <div>
        <p>{siteDescription}</p>
        
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>

        <nav>
          {navigationItems.map((navItem, i) => {
            if (navItem.children) {
              return (
                <div key={`${navItem.route}_${i}`}>
                  <p>{navItem.name}</p>

                  <div>
                    {navItem.children.map((childItem, j) => (
                      <Link
                        to={childItem.route}
                        key={`${childItem.route}_${j}`}
                      >
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
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

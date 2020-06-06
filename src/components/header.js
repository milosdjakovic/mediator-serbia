import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import navigationItems from "../data/navigation-data.json"

const Header = ({ siteTitle }) => {
  

  return (
    <header
      style={{
        borderBottom: "2px solid gray",
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <nav>
          {navigationItems.map((navItem, i) => {
            if (navItem.children) {
              return (
                <div key={`${navItem.route}_${i}`}>
                  <p>{navItem.name}</p>
                  <div>
                    {navItem.children.map((childItem, j) => (
                      <a
                        href={childItem.route}
                        key={`${childItem.route}_${j}`}
                      >
                        {childItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <a
                href={navItem.route}
                key={`${navItem.route}_${i}`}
              >
                {navItem.name}
              </a>
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

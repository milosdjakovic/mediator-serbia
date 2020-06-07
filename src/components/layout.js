/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Header />

      <Navigation />

      {/* <div className="flex flex-1 mt-20"> */}

        <main className="flex-grow lg:ml-76 mt-20 flex justify-center" >{children}</main>

        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      {/* </div> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

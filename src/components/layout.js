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
    <div className="min-h-screen flex flex-col text-gray-800">
      <Header />

      <div id="content-wrapper" className="px-10 flex w-full items-start max-w-6xl self-center mt-30 m-10">
        <Navigation />

        <main className="flex-grow">{children}</main>

        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

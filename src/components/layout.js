import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation"
import MobileNavigation from "./mobileNavigation"
import SidePanel from "./sidePanel"

const Layout = ({ children }) => {
  const [navigationVisible, setNavigationVisibility] = useState(false)

  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <SidePanel>
        <Navigation />
      </SidePanel>

      {mobileMenuVisible && (
        <MobileNavigation>
          <Navigation />
        </MobileNavigation>
      )}

      <main className="flex-grow lg:ml-76 mt-20 flex justify-center">
        {children}
      </main>

      <footer className="lg:ml-76 -mb-76 pb-4 flex justify-center mt-64">
        <p>
          © {new Date().getFullYear()},{` `}
          <a
            href="https://www.github.com/milosdjakovic"
            className="underline text-teal-600"
          >
            Miloš Đaković
          </a>
        </p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

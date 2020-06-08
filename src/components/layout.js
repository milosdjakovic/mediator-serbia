import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import gsap from "gsap"

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation"
import MobileNavigation from "./mobileNavigation"
import SidePanel from "./sidePanel"

// Assets
import wallBg from "../images/white_wall.png"

const Layout = ({ children }) => {
  const initialPageLoadComplete = useSelector(
    state => state.initialPageLoadComplete
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "INITIAL_PAGE_LOADED" })
  })

  useEffect(() => {
    if (!initialPageLoadComplete) {
      gsap.to('body', { opacity: 1 })

      const tl = gsap.timeline({
        delay: 0.2,
        defaults: { duration: 0.8, ease: "elastic.inOut(0.4 , 0.8)" },
      })

      tl.from("#___gatsby", { opacity: 0, duration: 0.2 })
      tl.from("#top-header", { opacity: 0, y: "-2rem" }, "-=0.18")
      tl.from("#header-logo", { x: -80, opacity: 0 }, "-=0.5")
      if (window.innerWidth > 1024) {
        tl.from("#side-panel-navigation", { opacity: 0, x: "-2rem" }, "-=0.5")
      }
      tl.from("#page-content", { opacity: 0, y: "2rem" }, "-=0.5")
    }
  })

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background: `linear-gradient(
        rgba(84, 173, 157, 0.2) 50%,
        rgba(33, 109, 95, 0.3)
      ),
      url(${wallBg})`,
      }}
    >
      <Header />

      <SidePanel>
        <Navigation />
      </SidePanel>

      <MobileNavigation>
        <Navigation />
      </MobileNavigation>

      <main className="z-10 flex items-start justify-center flex-grow h-screen pt-20 lg:pl-76">
        {children}
      </main>

      <footer className="flex justify-center mt-64 mb-8 lg:pl-76">
        <p>
          © {new Date().getFullYear()},{` `}
          <a
            href="https://www.github.com/milosdjakovic"
            className="text-teal-600 underline"
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

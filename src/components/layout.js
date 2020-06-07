import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import PageTransition from "gatsby-plugin-page-transitions"
import gsap from "gsap"

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation"
import MobileNavigation from "./mobileNavigation"
import SidePanel from "./sidePanel"

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
      const tl = gsap.timeline({
        delay: 0.2,
        defaults: { duration: 0.8, ease: "elastic.inOut(0.4 , 0.8)" },
      })

      tl.from("#___gatsby", { opacity: 0, duration: 0.2 })
      tl.from("#top-header", { opacity: 0, y: "-2rem" }, '-=0.18')
      tl.from("#header-logo", { x: -80, opacity: 0 }, "-=0.5")
      if (window.innerWidth > 1024) {
        tl.from("#side-panel-navigation", { opacity: 0, x: "-2rem" }, "-=0.5")
      }
      tl.from("#page-content", { opacity: 0, y: "2rem" }, "-=0.5")
    }
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <SidePanel>
        <Navigation />
      </SidePanel>

      <MobileNavigation>
        <Navigation />
      </MobileNavigation>

      <PageTransition
        defaultStyle={{
          transition:
            "opacity 300ms cubic-bezier(0.47, 0, 0.75, 0.72), transform 300ms cubic-bezier(0.47, 0, 0.75, 0.72)",
          transform: "translateY(10px)",
          opacity: 0,
        }}
        transitionStyles={{
          entering: { transform: "translateY(0)", opacity: 1 },
          entered: { transform: "translateY(0)", opacity: 1 },
          exiting: { transform: "translateY(10px)", opacity: 0 },
          exited: { transform: "translateY(10px)", opacity: 0 },
        }}
        transitionTime={300}
      >
        <main className="z-10 flex-grow lg:ml-76 mt-20 flex justify-center">
          {children}
        </main>
      </PageTransition>

      {/* <footer className="lg:ml-76 -mb-76 pb-4 flex justify-center mt-64">
        <p>
          © {new Date().getFullYear()},{` `}
          <a
            href="https://www.github.com/milosdjakovic"
            className="underline text-teal-600"
          >
            Miloš Đaković
          </a>
        </p>
      </footer> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

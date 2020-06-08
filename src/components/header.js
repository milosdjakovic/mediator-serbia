import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MediatorLogo from "./mediatorLogo"
import MenuButton from "./menuButton"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          quote {
            text
            author
          }
        }
      }
    }
  `)

  return (
    <header id="top-header" className="fixed inset-x-0 top-0 z-40 flex justify-center h-20 text-gray-100 bg-gray-900 shadow-md">
      <div className="flex items-center justify-between flex-grow mx-4 sm:mx-8 md:mx-12 xl:mx-10">
        <div className="flex mb-1">
          <MediatorLogo className="hidden w-12 mb-1 sm:block" />

          <div className="flex flex-col mb-1 ml-4 jsutify-center">
            <p className="bold">{data.site.siteMetadata.description}</p>

            <h1 className="mt-1 text-2xl leading-3">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
          </div>
        </div>

        <blockquote className="hidden italic leading-tight text-right lg:block">
          <p>{data.site.siteMetadata.quote.text}</p>
          <p className="text-gray-500 ">
            {data.site.siteMetadata.quote.author}
          </p>
        </blockquote>

        <MenuButton className="lg:hidden" />
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

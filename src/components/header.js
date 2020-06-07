import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MediatorLogo from "./mediatorLogo"
import MenuButton from "./menuButton"

const Header = ({ navigationVisible, setNavigationVisibility }) => {
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
    <header className="z-30 fixed top-0 inset-x-0 bg-gray-900 h-20 text-gray-100 flex justify-center shadow-md">
      <div className="flex justify-between items-center flex-grow mx-4 sm:mx-8 md:mx-12 xl:mx-20">
        <div className="mt-1 flex">
          <MediatorLogo className="w-12 mb-1 hidden sm:block" />

          <div className="ml-4 mb-1 flex flex-col jsutify-center">
            <p className="bold">{data.site.siteMetadata.description}</p>

            <h1 className="text-2xl sm:-mt-1 leading-tight">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
          </div>
        </div>

        <blockquote className="text-right italic hidden lg:block leading-tight">
          <p>{data.site.siteMetadata.quote.text}</p>
          <p className="text-gray-500 ">
            {data.site.siteMetadata.quote.author}
          </p>
        </blockquote>

        <MenuButton
          className="lg:hidden"
          navigationVisible={navigationVisible}
          setNavigationVisibility={setNavigationVisibility}
        />
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

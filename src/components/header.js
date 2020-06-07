import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


const Header = ({ siteTitle, siteDescription, quote }) => {
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
    <header className="z-30 fixed top-0 inset-x-0 bg-gray-900 text-gray-100 flex justify-center shadow-md">
      <div className="flex justify-between items-center flex-grow max-w-6xl mx-10 h-20">
        <div className="ml-10">
          <p className="bold">{data.site.siteMetadata.description}</p>
  
          <h1 className="text-2xl -mt-2">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </h1>
        </div>

        <blockquote className="text-right italic">
          <p>{data.site.siteMetadata.quote.text}</p>
          <p className="text-gray-500">{data.site.siteMetadata.quote.author}</p>
        </blockquote>
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

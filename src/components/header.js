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
    <header>
      <div>
        <p>{data.site.siteMetadata.description}</p>

        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>

        <p>{data.site.siteMetadata.quote.text}</p>
        <p>{data.site.siteMetadata.quote.author}</p>
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

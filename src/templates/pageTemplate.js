import React, { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Assets
import paperBg from "../images/groovepaper.png"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const pageContents = useRef(null)
  const [pageDescription, setPageDescription] = useState("")

  useEffect(() => {
    const firstSentanceFromFirstParagraph = pageContents.current.querySelector('p').textContent;

    setPageDescription(firstSentanceFromFirstParagraph)
  }, [html])

  return (
    <>
      <SEO 
        title={frontmatter.title} 
        description={pageDescription}
      />

      <Layout>
        <div
          style={{
            backgroundImage: `url(${paperBg})`,
          }}
          ref={pageContents}
          id="page-content"
          className="flex-grow max-w-5xl px-6 pt-4 pb-12 m-4 text-lg shadow-md sm:p-8 sm:m-8 md:m-12 md:p-12 xl:p-20 xl:m-20"
        >
          <h1 className="text-4xl">{frontmatter.title}</h1>
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

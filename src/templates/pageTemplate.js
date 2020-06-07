import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <SEO title={frontmatter.title} />

      <Layout>
        <div id="page-content" className="p-4 m-4 sm:p-8 sm:m-8 md:m-12 md:p-12 xl:p-20 xl:m-20">
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

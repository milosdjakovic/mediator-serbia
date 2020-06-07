import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Tražena stranica ne postoji</h1>
    <p>Za više informacija posetitie našu [Kontakt Stranu](/kontakt).</p>
  </Layout>
)

export default NotFoundPage

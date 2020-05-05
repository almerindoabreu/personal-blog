import React from "react"

import Layout from "../components/Layout"
import ProjetoItem from "../components/ProjetoItem"
import SEO from "../components/seo"

const ProjetoPage = () => (
  <Layout>
    <SEO title="Projetos" />
    <ProjetoItem />
  </Layout>
)

export default ProjetoPage

import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import ProjetoItem from "../components/ProjetoItem"
import SEO from "../components/seo"

const ProjetoPage = ({ data }) => {
  const projetoList = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Projetos" />
      <ProjetoItem projetos={projetoList} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(projects)/.*.md$/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            keyWords
            description
            title
            image
            readMe
            paper
          }
          html
        }
      }
    }
  }
`

export default ProjetoPage

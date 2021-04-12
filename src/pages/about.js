import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"

const AboutPage = ({ data }) => {
  const about = data.allMarkdownRemark.edges
  return(
  <Layout>
    <SEO title="Sobre mim" />
    <AboutMe about={about} />
  </Layout>
);

}


export const query = graphql`
    query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(aboutme)/.*.md$/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default AboutPage

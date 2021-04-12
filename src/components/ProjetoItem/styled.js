import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const ProjetoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0 0 0;


  ${media.lessThan("650px")`
    padding: 2rem 0 0 0;
  `}
`

export const ProjetoItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  color: var(--texts);
  padding: 1rem;
  margin-bottom: 2rem;

  ${media.lessThan("650px")`
    padding: 0rem;
  `}
`

export const ProjetoItemMainImage = styled.img`
  display: ${props => (props.modo === "large" ? "block" : "none")};
  padding-top: 1rem;
  min-width: 20rem;
  max-width: 20rem;
  align-self: flex-start;

  ${media.lessThan("1200px")`
    min-height: 16rem;
    min-width: 16rem;
    max-height: 16rem;
    max-width: 16rem;
  `}

  ${media.lessThan("1000px")`
    display: ${props => (props.modo === "small" ? "block" : "none")};
    padding: 1rem;
    max-width: 100%;
  `}
`

export const ProjetoContentWrapper = styled.div`
  margin: 0 2rem 0 2rem;

  ${media.lessThan("830px")`
    margin: 0 1rem;
  `}

  ${media.lessThan("730px")`
    margin: 0 0.5rem;
  `}

  ${media.lessThan("650px")`
    margin: 0 0rem;
  `}
`

export const ProjetoItemTitle = styled.h1`
  margin: 1rem 1rem;
  font-weight: 600;
  color: #42a5f5;
  font-size: 1.4rem;
`

export const ProjetoItemInfo = styled.div`
  margin: 0rem 1rem;
  color: var(--texts);
  font-size: 1rem;
`

export const ProjetoItemDescription = styled.section`
  max-width: 70rem;
  padding: 2rem 0rem;

  ${media.lessThan("830px")`
    padding: 2rem 0rem;
  `}

  ${media.lessThan("650px")`
    padding: 1rem 1rem;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--texts);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan("830px")`
      font-size: 1rem;
      padding: 0 1rem;
    `}

    ${media.lessThan("650px")`
      font-size: 1rem;
      padding: 0 0rem;
    `}
  }
  p {
    padding: 0 1rem;
    margin: 0 auto 1.6rem;
    ${media.lessThan("650px")`
      padding: 0 0rem;
    `}
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: var(--texts);
    border-left: 0.3rem solid #1fa1f2;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan("830px")`
      font-size: 2.2rem;
    `}

    ${media.lessThan("650px")`
      font-size: 1.4rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
    ${media.lessThan("830px")`
      font-size: 1.7rem;
    `}

    ${media.lessThan("650px")`
      font-size: 1.2rem;
    `}
  }
  h3 {
    font-size: 1.6rem;
    ${media.lessThan("830px")`
      font-size: 1.3rem;
    `}

    ${media.lessThan("650px")`
      font-size: 1rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
    ${media.lessThan("830px")`
      font-size: 1.1rem;
    `}

    ${media.lessThan("650px")`
      font-size: 0.8rem;
    `}
  }
  h5 {
    font-size: 1.2rem;
    ${media.lessThan("830px")`
      font-size: 0.8rem;
    `}

    ${media.lessThan("650px")`
      font-size: 0.6rem;
    `}
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan("650px")`
      padding: 0 0rem 1.6rem;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--texts);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
export const ProjetoLinksWrapper = styled.div``

export const ProjetoLink = styled.a`
  padding: 0.8rem;
  color: #42a5f5;
  font-size: 0.9rem;
  text-decoration: none;

`

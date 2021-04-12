import styled from "styled-components"
import media from "styled-media-query"

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0 0;

  ${media.lessThan("650px")`
    padding: 1rem 0 0 0;
  `}
`
export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("650px")`
  `}
`

export const AboutMeDescription = styled.section`
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

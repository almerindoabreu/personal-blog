import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: var(--background);;
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: var(--background);
  color: #1fa1f2;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: var(--mediumBackground);
  }
  &.previous {
    border-right: 1px solid var(--mediumBackground);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`

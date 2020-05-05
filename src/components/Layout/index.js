import React from "react"
import PropTypes from "prop-types"
import SideBar from "../SideBar"
import NavBar from "../NavBar"
import Footer from "../Footer"
import GlobalStyles from "../../styles/global"

import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <>
      <S.LayoutWrapper>
        <GlobalStyles />
        <NavBar mode="mobile" />
        <SideBar />
        <S.LayoutMain>
          <NavBar mode="desktop" />
          {children}
          <Footer />
        </S.LayoutMain>
      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

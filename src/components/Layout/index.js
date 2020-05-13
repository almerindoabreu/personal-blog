import React from "react"
import PropTypes from "prop-types"
import SideBar from "../SideBar"
import NavBar from "../Navbar"
import Footer from "../Footer"
import GlobalStyles from "../../styles/global"

import * as S from "./styled"

const Layout = ({ children, isPost = false }) => {
  return (
    <>
      <S.LayoutWrapper>
        <GlobalStyles />
        <NavBar mode="small" />
        <SideBar isPost={isPost} />
        <S.LayoutMain>
          <NavBar mode="large" />
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

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import SideBar from "../SideBar"
import NavBar from "../Navbar"
import Footer from "../Footer"
import GlobalStyles from "../../styles/global"

import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from "./styled"

import isNightMode from "../../utils/isNightMode"

const Layout = ({ children, isPost = false }) => {
  const [nightMode, setNightMode] = useState(null);

  useEffect(() => {
    setNightMode(isNightMode());
  }, [])

  return (
    <>
      <S.LayoutWrapper>
        <GlobalStyles />
        <TransitionPortal level="top">
          <S.LayoutSideBar>
            <NavBar mode="small" setNightMode={setNightMode}/>
            <SideBar isPost={isPost} isDarkMode={nightMode} />
          </S.LayoutSideBar>
          <NavBar mode="large" setNightMode={setNightMode}/>
        </TransitionPortal>
        <S.LayoutMain>
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

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import SideBar from "../SideBar"
import NavBar from "../Navbar"
import Footer from "../Footer"
import MobileHeader from "../MobileHeader"
import MobileAction from "../MobileAction"
import MobileMenu from "../MobileMenu"
import GlobalStyles from "../../styles/global"

import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from "./styled"

import isNightMode from "../../utils/isNightMode"

const Layout = ({ children, isPost = false }) => {
  const [nightMode, setNightMode] = useState(null);
  const [isOpenedMobileMenu, setIsOpenedMobileMenu] = useState(false);

  useEffect(() => {
    setNightMode(isNightMode());
  }, [])

  return (
    <>
      <S.LayoutWrapper>
        <GlobalStyles />
        <TransitionPortal level="top">
          <MobileMenu isOpenedMobileMenu={isOpenedMobileMenu} setIsOpenedMobileMenu={setIsOpenedMobileMenu}/>
          <MobileHeader isDarkMode={nightMode} setNightMode={setNightMode} isOpenedMobileMenu={isOpenedMobileMenu} setIsOpenedMobileMenu={setIsOpenedMobileMenu}/>
          <SideBar isPost={isPost} isDarkMode={nightMode} />
          <NavBar mode="large" setNightMode={setNightMode}/>
        </TransitionPortal>

          <S.LayoutMain>
            {children}
            <Footer />
          </S.LayoutMain>

        <TransitionPortal level="top">
          <MobileAction 
            nightMode={nightMode}
            setNightMode={setNightMode}
            />
        </TransitionPortal>

      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

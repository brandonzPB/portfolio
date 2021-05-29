import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from './styles/GlobalStyle';
import styled from 'styled-components';

import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <NavBar />

      <main>{children}</main>

      <Footer theme="light" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from './styles/GlobalStyle';

import NavBar from './NavBar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Header />
      <main>{children}</main>
      <Body />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

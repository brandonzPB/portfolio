import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from '../styles/GlobalStyle';

import BlogHeader from './BlogHeader';
import Footer from '../Footer';

const BlogLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <BlogHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout;

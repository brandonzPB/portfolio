import React from "react"
import PropTypes from "prop-types"
import { BlogStyle } from '../styles/BlogStyle';

import NavBar from '../NavBar';
import BlogHeader from './BlogHeader';
import Footer from '../Footer';

const BlogLayout = ({ children }) => {
  return (
    <>
      <BlogStyle />
      <NavBar />
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

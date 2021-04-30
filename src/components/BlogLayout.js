import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from './styles/GlobalStyle';

const BlogLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout;

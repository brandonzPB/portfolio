import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { BlogStyle } from '../styles/BlogStyle';

import BlogHeader from './BlogHeader';
import Footer from '../Footer';

const BlogLayout = ({ children, modalState }) => {
  return (
    <>
      <BlogStyle />

      <main>
        {
          children.map(child => {
            return React.cloneElement(
              child,
              {
                key: uuidv4(),
                modalState
              }
            )
          })
        }
      </main>
    </>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout;

const BlogContainer = styled.div`
  ${'' /* background: linear-gradient(0.25turn,
    #FFF,
    #fff,
    #fff,
    #fff,
    #fff,
    #ECEBEB,
    #E7E5E5,
    #D5D0D2,
    #C5BFC4,
    #CECDD5
  ); */}
  width: 100%;
`;

const BlogFooterContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: rgba(100, 100, 100, 0.6);
  padding: 0.5rem 0;
`;


import React from 'react';
import PropTypes from "prop-types"
import { v4 as uuidv4 } from 'uuid';

import { GlobalStyle } from './styles/GlobalStyle';
import Footer from './Footer';

const ProjectLayout = ({ children, modalState }) => {
  return (
    <>
      <GlobalStyle />

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

      <Footer theme={'light'} />
    </>
  )
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout;

import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import NavBar from './NavBar';
import BlogHeader from '../Blog/BlogHeader';
import Footer from '../Footer';

const NavLayout = ({ children, layout }) => {
  const childrenArr = children.props
    ? children.props.children
    : children;

  const [modalState, setModalState] = useState({ display: false });

  // SHOW MODAL MENU
  const showModal = () => {
    if (modalState.display) return;

    setModalState({ display: true });
  }

  // HIDE MODAL MENU
  const hideModal = () => {
    if (!modalState.display) return;

    setModalState({ display: false });
  }

  return (
    <>
      <NavBar 
        hideModal={hideModal}
        modalState={modalState}
        showModal={showModal}
      />

      {
        layout === 'blog'
          ? <BlogHeader />
          : <></>
      }

      <main>
        {
          childrenArr.map(child => {
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

      {
        layout === 'blog'
          ? <BlogFooterContainer>
            <Footer theme={'dark'} />
          </BlogFooterContainer>
          : <Footer theme={'light'} />
      }
    </>
  )
}

export default NavLayout;

const BlogFooterContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: rgba(100, 100, 100, 0.6);
  padding: 0.5rem 0;
`;
import React from 'react'
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeadline>
        <h1>
          Let's 
          <span id="gold-text"> Create </span>
          Something Awesome 
          <span id="gold-text">Together</span>
        </h1>
      </FooterHeadline>

      <FooterDesc>
        <p>If you just want to chat, or if you're looking for a programmer, team member, or leader, feel free to send me an email.</p>
        <a href="mailto:brandon@brandon.dev">brandon@brandonweb.dev</a>
      </FooterDesc>

      <FooterSocials>
        <a href="https://github.com/brandonzpb" target="_blank" rel="noreferrer" id="github-link">
          <AiFillGithub id="github" />
        </a>
        <p>youtube/instagram/twitter</p>
      </FooterSocials>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  
`

const FooterHeadline = styled.div`
  #gold-text {
    color: #fecc27;
  }
`

const FooterDesc = styled.div``

const FooterSocials = styled.div`
  #github-link {
  }

  #github-link:hover {
  }

  #github {
  }
`
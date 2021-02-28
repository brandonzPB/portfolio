import React from 'react'
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { FaYoutube, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'gatsby';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';
import 'fontsource-roboto';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeadline>
        <h1>
          Let's 
          <span id="gold-text"> Create </span>
          Something Awesome 
          <span id="gold-text"> Together</span>
        </h1>
      </FooterHeadline>

      <FooterDesc>
        <p>If you just want to chat, or if you're looking for a programmer, team member, or leader, feel free to send me an email.</p>
        <a href="mailto:brandon@brandon.dev">brandon@brandonweb.dev</a>
      </FooterDesc>

      <FooterSocials>
        <a href="https://github.com/brandonzpb" target="_blank" rel="noreferrer" id="github-link">
          <AiFillGithub id="github" className="icon" />
        </a>
        <a href="https://www.youtube.com/channel/UC8ro96mSErJclS_VRFgEsVw/featured" target="_blank" rel="noreferrer">
          <FaYoutube id="youtube" className="icon" />
        </a>
      </FooterSocials>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: block;
  margin: 7rem 2rem;

  @media screen and (max-width: 500px) {
    margin: 2rem;
  }
`

const FooterHeadline = styled.div`
  margin: 1rem auto;
  font-family: 'Playfair Display', sans-serif;
  color: #36434d;

  #gold-text {
    color: #fecc27;
  }
`

const FooterDesc = styled.div`
  font-size: 1.25rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 2.5rem;
  color: #828282;

  a:link, a:visited {
    color: #0070b7;
    text-decoration: none;
  }

  a {
    border-bottom: 2px solid #0070b7;
    transition: border-bottom 0.3s ease 0s;
  }

  a:hover {
    color: #48CEF7;
    border-bottom: transparent;
  }
`

const FooterSocials = styled.div`
  display: block;
  margin: 2rem auto;
  float: right;

  .icon {
    margin: 0 1rem;
    display: inline-block;
  }

  #github {
    color: black;
    font-size: 1.5rem;
    transition: transform 0.5s ease 0;
  }

  #github:hover {
    color: #333;
    transform: scale(1.1);
  }

  #youtube {
    color: #FF0000;
    font-size: 1.5rem;
    transition: transform 0.3s ease 0;
  }

  #youtube:hover {
    color: #FF143D;
    transform: scale(1.1);
  }

  #twitter {
    color: #00A2F3;
    font-size: 1.5rem;
    transition: transform 0.3s ease 0;
  }

  #twitter:hover {
    color: #48CEF7;
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    .icon {
      font-size: 3rem;
    }

    float: none;
    display: block;
    text-align: center;
  }
`
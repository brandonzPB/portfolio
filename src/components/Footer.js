import React from 'react'
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { FaYoutube, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';

const Footer = ({ theme }) => {
  return (
    <FooterContainer>
      <FooterHeadline>
        <FooterHeadlineText style={{ color: theme === 'light' ? 'black' : 'white' }}>
          Let's 
          <span id="gold-text"> Create </span>
          Something Awesome 
          <span id="gold-text"> Together</span>
        </FooterHeadlineText>
      </FooterHeadline>

      <FooterDesc>
        <FooterDecText style={{ color: theme === 'light' ? '#828282' : 'white' }}>
          If you just want to chat, or if you're looking 
          for a programmer, team member, or leader, 
          feel free to send me an email.
        </FooterDecText>
        <a 
          href="mailto:zirBrandonWeb@gmail.com"
          style={{
            color: theme === 'light'
              ? '#2F93D4'
              : '#C5E2EE',
            borderBottom: theme === 'light'
              ? '2px solid #2F93D4'
              : '2px solid #C5E2EE;'
          }}
        >
          zirBrandonWeb@gmail.com
        </a>
      </FooterDesc>

      <FooterSocials>
        <a href="https://github.com/brandonzpb" target="_blank" rel="noreferrer" id="github-link">
          <AiFillGithub id="github" className="icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCi4kdZG8UsH_drFUGkKVavw/featured" target="_blank" rel="noreferrer">
          <FaYoutube id="youtube" className="icon" />
        </a>
        <a href="https://twitter.com/zirWeb" target="_blank" rel="noreferrer">
          <FaTwitterSquare id="twitter" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/brandon-z" target="_blank" rel="noreferrer">
          <FaLinkedin id="linkedin" className="icon" />
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
`;

const FooterHeadlineText = styled.h1`
  color: white;
`;

const FooterDesc = styled.div`
  font-size: 1.25rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 2.5rem;
  color: #828282;

  a:link, a:visited {
    color: #C5E2EE;
    text-decoration: none;
  }

  a {
    border-bottom: 2px solid #C5E2EE;
    transition: border-bottom 0.3s ease 0s;
  }

  a:hover {
    color: #0A66C2;
    border-bottom: transparent;
  }
`;

const FooterDecText = styled.p`
  color: white; 
`;

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

  #linkedin {
    color: #0A66C2;
    font-size: 1.5rem;
    transition: transform 0.3s ease 0;
  }

  #linkedin:hover {
    color: #70B5F9;
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
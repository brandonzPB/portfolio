import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from '../components/styles/GlobalStyle';

import Project from '../components/Project';
import ProjectFooter from '../components/ProjectFooter';
import Footer from '../components/Footer';

const Battleship = () => {
  const data = useStaticQuery(graphql`
    query Battleship {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {in: ["battleship-0", "battleship-1"]}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }      
  `);

  const details = `This is the first front-end project I ever made for the sole purpose of
    putting my skills and knowledge into practice. I included it in my portfolio to show the progress I've made
    since starting in June 2020.`;

  const stack = ['HTML', 'CSS', 'React', 'vanilla JavaScript'];

  const link = 'https://brandonzpb.github.io/battleship';

  const purpose = `I made this app so that I could develop my newly-acquired skills. I realized that the best way to 
    improve as a programmer would be to create a game, and I thought creating a clone of Battleship would be a good start.`;

  const tech = `This app uses React, HTML, CSS, and vanilla JavaScript, because it is what I was learning at the time. 
    I used this technologies to create this project to see if I enjoyed building with them. As it turns out: I did!`;

  const lessons = `Although this project is incredibly simple and lacks originality in its overall concept, I gained a wealth
    of knowledge from building it. The biggest problem was designing the gameboard and figuring out how to setup the ships for each player.
    In the end, I determined that the user's experience would be best if I setup the ships for them. As a result, I created an algorithm
    that placed the differently-sized ships in random positions.`;

  const alt1 = 'A painting of a submarine underwater';
  const alt2 = `A screenshot of the game Battleship. Two tile displays on either side, one for the player's ships and one to mark
    where cannonballs were shot. 
    Player one is named "Captain Morgan" and has yet to make a move.`;

  return (
    <>
      <GlobalStyle />
      <Project 
        title="Battleship"
        details={details}
        stack={stack}
        link={link}
        purpose={purpose}
        tech={tech}
        lessons={lessons}
        data={data}
        alt1={alt1}
        alt2={alt2}
        icon="battleship"
      />
      <ProjectFooter keyword="battleship" />
      <Footer />
    </>
  )
}

export default Battleship

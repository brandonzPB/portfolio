import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from '../components/styles/GlobalStyle';

import NavBar from '../components/NavBar';
import Project from '../components/Project';
import ProjectFooter from '../components/ProjectFooter';
import Footer from '../components/Footer';

const Battleship = () => {
  // gets thumbnails of Creatures and Mindful
  const data = useStaticQuery(graphql`
    query OtherProjectTiles {
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

  const images = data.allFile.edges.map(img => {
    return {
      fluid: img.node.childImageSharp.fluid,
      src: img.node.childImageSharp.fluid.src,
    }
  });

  const details = `This is the first front-end project I ever made for the sole purpose of
    putting my skills and knowledge into practice. I included it in my portfolio to show the progress I've made
    since my first month of programming.`;

  const stack = ['React (JavaScript)', 'React Context API', 'HTML5', 'CSS', 'vanilla JavaScript'];

  const link = 'https://brandonzpb.github.io/battleship';

  const sourceCode = 'https://github.com/brandonzpb/battleship';

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

  const otherA = {
    link: '/Creatures_of_Habit',
    title: 'Creatures of Habit',
    alt: 'Serene painting of a light blue sky, a grassy field, and the ocean in between',
    name: 'painting-creatures',
  };

  const otherB = {
    link: '/Mindful',
    title: 'mindful.io',
    alt: 'Peaceful image with black stones and bamboo in the background',
    name: 'painting-mindful',
  };

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Project 
        title="Battleship"
        details={details}
        stack={stack}
        link={link}
        sourceCode={sourceCode}
        purpose={purpose}
        tech={tech}
        lessons={lessons}
        data={images}
        alt1={alt1}
        alt2={alt2}
        icon="battleship"
      />
      <ProjectFooter otherA={otherA} otherB={otherB} />
      <Footer theme={'light'} />
    </>
  )
}

export default Battleship

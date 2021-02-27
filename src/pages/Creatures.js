import React from 'react'
import { useStaticQuery, graphql, useScrollRestoration } from 'gatsby';

import Project from '../components/Project';
import ProjectFooter from '../components/ProjectFooter';
import Footer from '../components/Footer';
import { GlobalStyle } from '../components/styles/GlobalStyle';

const Creatures = () => {
  const data = useStaticQuery(graphql`
    query MyCreatures {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {in: ["creatures-0", "creatures-1"]}}) {
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

  const details = `
    The project that started it all. 
    I wanted a way to quantify areas of my life that are inherently qualitative (e.g., mental health, philosophy, etc.). 
    So I set out on learning to program from a background with zero prior experience or expertise, 
    and I ended up creating a "full-stack" web application that me and my friends use today.
  `;

  const stack = ['CSS', 'React', 'React Context API', 'NodeJS', 'Express', 'MongoDB', 'Heroku'];

  const link = 'https://brandonzpb.github.io/creatures';

  const purpose = `
    After seeing so many "Life RPG" apps, I was inspired to make my own version that had all the features I wanted 
    that the others lacked. So the purpose of this app is to do just that: provide a nostalgic alternative 
    to apps that measure areas of your life the way a video game measures experience points and character evolution.
  `;

  const tech = `
    I used React to create this project because it seemed like the best choice, with its packages, hooks, and state management. 
    I also used NodeJS and Express to create the server because I really enjoy building with JavaScript and I was eager to learn how to 
    make a "full-stack" web app with just one programming language. I also used MongoDB because of the scalable cloud services it provides. 
  `;

  const lessons = `
    The number of lessons I learned from this project alone is too many to detail in a simple paragraph! 
    Firstly, due to the complex structure of the "creature" objects, I learned a tremendous amount about the importance of refactoring code 
    and building a project that is clean and easy to maintain. 
    I also learned about the importance of writing unit tests before coding any of the project itself. 
    Another important concept I learned was the necessity of having a plan when designing any project: I learned what 
    works for me, how to mitigate my weaknesses, and make great use of my strengths. I used this plan when creating mindful.io.
  `;

  const alt1 = 'A serene painting of a light blue sky, a grassy field, and the ocean';
  
  const alt2 = `Screenshot of the Creatures of Habit app; 
    a Pokemon called Porygon with a nickname of duck.js has various habits, 
    such as studying and practing`;

  return (
    <>
      <GlobalStyle />
      <Project 
        title="Creatures of Habit"
        details={details}
        stack={stack}
        link={link}
        purpose={purpose}
        tech={tech}
        lessons={lessons}
        data={data}
        alt1={alt1}
        alt2={alt2}
        icon="creatures"
      />
      <ProjectFooter keyword="creatures" />
      <Footer />
    </>
  )
}

export default Creatures

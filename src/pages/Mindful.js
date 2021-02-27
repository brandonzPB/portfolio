import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

import Project from '../components/Project';
import ProjectFooter from '../components/ProjectFooter';
import Footer from '../components/Footer';
import { GlobalStyle } from '../components/styles/GlobalStyle';

const Mindful = () => {
  const data = useStaticQuery(graphql`
    query MyMindful {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {in: ["mindful-0", "mindful-1"]}}) {
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
    I wanted the utility of this project to as simple as possible, since I wanted as many people as possible to benefit from it. 
    Mindful.io provides links to guided meditation apps and videos, information on mindfulness and meditation, including benefits, 
    techniques, and exercises. I also wrote a custom list of questions to answer after the user is done meditating, 
    for the purpose of applying that calmer state and increased mindfulness to their personal life. This app is currently used by 
    my friends, family, and classmates (and myself). 
  `;

  const stack = ['React', 'CSS', 'vanilla JavaScript'];

  const link = 'https://brandonzpb.github.io/mindful';

  const purpose = `
    I made this project for the purpose of helping others develop the healthy habit of meditating and being more mindful. It's 
    my life's purpose to create elegant, enjoyable, and useful experiences with code, and I wanted this project to show that. 
  `;

  const tech = `
    React seemed like the best tool for the job, because I wanted to create a single-page application that is interactive and easy to use. 
    I used vanilla JavaScript to create the meditation timer and the button that saves responses to questions to the user's local device 
    (since the app does not store them).
  `;

  const lessons = `
    I found myself studying a lot of CSS techniques and design principles (à la "The Design of Everyday Things" by Don Norman) while making 
    this app. 
    Initially, I customized the experience via a database that was setup to gradually 
    guide users along the mindfulness journey through questions that required an increasing level of self-honesty and integrity. 
    However, I realized that fewer people would use this app and, thus, fewer people 
    would benefit from mindfulness if they had to create an account before being able to use the app, so I completely removed the 
    backend so as to simplify and enhance the user experience.
    After understanding these techniques, I revisited Creatures of Habit and improved upon its design and user experience. 
    I used these lessons and principles when designing The Republic 310, as well.
  `;

  const alt1 = 'Peaceful image with black stones and bamboo in the background';

  const alt2 = `Screenshot of the mindful.io app; 
    a dashboard with a circular modal with app icons in the center. 
    Text says, 'Hover over one of the icons!'`;

  return (
    <>
      <GlobalStyle />
      <Project 
        title="mindful.io"
        details={details}
        stack={stack}
        link={link}
        purpose={purpose}
        tech={tech}
        lessons={lessons}
        data={data}
        alt1={alt1}
        alt2={alt2}
      />
      <ProjectFooter keyword="mindful" />
      <Footer />
    </>
  )
}

export default Mindful

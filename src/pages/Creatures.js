import React from 'react'
import { Link } from 'gatsby';
import { Img } from 'gatsby-image';
import styled from 'styled-components';

import Project from '../components/Project';
import ProjectFooter from '../components/ProjectFooter';
import Footer from '../components/Footer';

const Creatures = () => {
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

  return (
    <div>
      <Project 
        title="Creatures of Habit"
        details={details}
        stack={stack}
        link={link}
        purpose={purpose}
        tech={tech}
        lessons={lessons}
      />
      <ProjectFooter />
      <Footer />
    </div>
  )
}

export default Creatures

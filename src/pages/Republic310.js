import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Project from './components/Project';
import ProjectFooter from './components/ProjectFooter';
import Footer from './components/Footer';
import { GlobalStyle } from '../components/styles/GlobalStyle';

const Republic310 = () => {
  const data = UseStaticQuery(graphql`
    query MyRepublic {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"},
      name: {in: ["republic-0"]}}) {
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
    This is website I made for a client who is 
    interested in starting their own business in
    sales. A live version is yet unavailable because
    we are still waiting for original stock photos, in
    addition to other areas being finalized. (Once the website
    is live, this page will be updated!)
  `;

  const stack = ['React (TypeScript)', 'React Context API, CSS, NodeJS, Express, JSON web tokens, bcrypt, NoSQL, MongoDB'];

  const link = '#';

  const sourceCode = '#';

  const purpose = `
    A client came to me in need of a website for their startup business
    and I was more than happy to accept the opportunity to work with them.
    Not only would I use this opportunity to challenge myself and grow as a programmer,
    but I'd be able to help a business that I know will one day better the lives of 
    millions.
  `;

  const tech = `
    I used React to make this project, as well as the same backend combo of Express, MongoDB, and NoSQL.
    However, I wanted to challenge myself to use something that was completely new to me: TypeScript. 
    Initially, I felt intimidated at seeing the complexity of one's code once it's "translated" from JavaScript
    to clean, effective TypeScript. However, after working with it, seeing its advantages over regular JavaScript,
    and ultimately learning how to write cleaner code with fewer bugs--I fell in love. Although it's only been
    a month, imagining myself coding with vanilla JavaScript just feels irresponsible and reckless!
  `;

  const lessons = `
    I've acquired a tremenous amount of wisdom while working on this project. I learned about the 
    shortcomings of NoSQL + MongoDB when creating a server/database for an e-commerce site
    (while working on this project, I started studying/practicing PostgreSQL, MikroORM,
    and GraphQL to use for future projects--Mongo is nice, but being able to create my OWN database and customize
    mutations and queries seems much cooler). In the process of figuring out how to combine the syntax and safety measures of
    TypeScript with React hooks and its Context API, I've not only learned a lot about better practices for writing code in a 
    reusable fashion, but also found a wealth of resources to dive into and further my knowledge and ability to work with everything
    React has to offer. I certainly would not have grown without electing to use TypeScript over JavaScript for this project, nor would
    I have been directed down a far more grand path of wisdom, knowledge, and practice so soon in my career. The difficulties of learning
    to use TypeScript have been an absolute blessing.
  `;

  const alt1 = `The landing page of The Republic 310. The banner is of two female surfers walking along
    an empty beach, holding surfboards.
  `;

  const alt2 = 'blank';

  return (
    <>
      <GlobalStyle />
      <Project 
        title="The Republic 310"
        details={details}
        stack={stack}
        link={link}
        sourceCode={sourceCode}
        purpose={purpose}
        tech={tech}
        lessons={lessons}
        data={data}
        alt1={alt1}
        alt2={alt2}
        icon="republic"
      />
      <ProjectFooter keyword="republic" />
      <Footer />
    </>
  );
}

export default Republic310;

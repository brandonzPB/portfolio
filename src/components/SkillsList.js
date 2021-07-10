import React from "react"
import styled from "styled-components"

import { GiTriforce } from "react-icons/gi"

const SkillsList = () => {
  return (
    <SkillsListContainer>
      <ul>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">React (TypeScript and JavaScript)</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">Redux and React Context API</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">Sass</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">Gatsby Styled Components</span>
        </li>
      </ul>

      <ul>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">HTML5</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">SEO</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">UX/UI Design</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">Jest Unit Testing</span>
        </li>
      </ul>

      <ul>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">GraphQL and Type-GraphQL</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">SQL and MySQL</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">PostgreSQL</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">NoSQL</span>
        </li>
      </ul>

      <ul>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">NodeJS and Express</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">TypeORM</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">MongoDB</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">Adobe Photoshop</span>
        </li>
      </ul>

      <ul>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">Python</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">React Native</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">A11y (accessibility)</span>
        </li>
        <li>
          <GiTriforce className="icon" />
          <GiTriforce className="list-type" />
          <span className="list-text">Shopify</span>
        </li>
      </ul>
    </SkillsListContainer>
  )
}

export default SkillsList

const SkillsListContainer = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  ul {
    margin: 0 auto;
    width: 100%;
    text-align: left;
    display: block;

    @media screen and (max-width: 500px) {
      height: auto;
      padding: 0 1.5rem;
      width: 90%;
      display: block;
    }
  }

  li {
    list-style-type: none;
    margin: 0.5rem auto;
    text-align: left;
    font-family: "Open Sans", sans-serif;
    color: #828282;

    .list-type {
      display: none;
    }

    @media screen and (max-width: 500px) {
      .list-type {
        display: inline-block;
        width: 1rem;
        font-size: 1rem;
        color: #fecc27;
        margin-right: 0.5rem;
      }
    }
  }

  .list-text {
  }

  .icon {
    font-size: 0.75rem;
    margin: 0 1rem;
    color: #fecc27;
  }

  @media screen and (max-width: 500px) {
    .icon {
      display: none;
    }
  }
`

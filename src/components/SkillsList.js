import React from "react"
import styled from "styled-components"

import { GiTriforce } from "react-icons/gi"

import { skills } from "../data/skills"

const SkillsList = () => {
  const SkillsComponents = skills.map((skill, idx) => {
    return (
      <li key={idx}>
        <GiTriforce className="icon" />
        <GiTriforce className="list-type" />
        <span className="list-text">{skill}</span>
      </li>
    )
  })

  return (
    <SkillsListContainer>
      <ul className="skills-list">{SkillsComponents}</ul>
    </SkillsListContainer>
  )
}

export default SkillsList

const SkillsListContainer = styled.div`
  margin: 2rem auto;
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  ul {
    margin: 0 auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 12rem;

    @media screen and (max-width: 500px) {
      height: auto;
      padding: 0 1.5rem;
      width: 90%;
      display: block;
    }
  }

  li {
    list-style-type: none;
    margin: 0.5rem 0;
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

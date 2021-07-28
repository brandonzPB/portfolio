import React from "react"
import styled from "styled-components"

import { BiMobileVibration } from "react-icons/bi"
import { CgPokemon } from "react-icons/cg"
import { FaPeace } from "react-icons/fa"
import { GiBattleship, GiPalmTree } from "react-icons/gi"

const TechStackIcon = ({ icon }) => {
  return (
    <>
      {icon === "battleship" ? (
        <GiBattleship className="list-o" stlye={{ display: "inline-block" }} />
      ) : icon === "creatures" ? (
        <CgPokemon className="list-o" stlye={{ display: "inline-block" }} />
      ) : icon === "mindful" ? (
        <FaPeace className="list-o" stlye={{ display: "inline-block" }} />
      ) : icon === "republic" ? (
        <GiPalmTree className="list-o" stlye={{ display: "inline-block" }} />
      ) : (
        <BiMobileVibration
          className="list-o"
          stlye={{ display: "inline-block" }}
        />
      )}
    </>
  )
}

export default TechStackIcon

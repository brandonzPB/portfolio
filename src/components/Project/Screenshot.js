import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Screenshot = ({ fluid, src }) => {
  return (
    <ScreenshotContainer>
      <ScreenshotImg fluid={fluid} src={src} />
    </ScreenshotContainer>
  )
}

export default Screenshot

const ScreenshotContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`

const ScreenshotImg = styled(Img)`
  display: block;
  margin: 3.5rem auto;
  width: 75%;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`

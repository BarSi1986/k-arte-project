import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../ui_components/H2_header'

const AppWrapper = styled.div`
  height: 95vh;
  position: relative;
  width: 100%;
  margin: auto;
`;

const AboutImage = styled.div`
  width: 80%;
  height: 60%;
  position: absolute;
  right: 0px;
  top:  0px;
  /* border: solid 2px goldenrod; */
`;

const AboutTxt = styled.div`
  width: 800px;
  height: 50%;
  position: absolute;
  left: 10%;
  top: 40%;
  /* border: solid 2px goldenrod; */
  box-shadow: -5px 15px 15px -5px lightgrey;
  /* background: #fff; */
  padding: 50px;
  background: #fff;
  display: flex;
`;

const BgLinearGradient = styled.div`
  width: 100px;
  height: 100%;
  background: linear-gradient(0.25turn, #fff, #fff, rgba(255,255,255, .95), transparent);
  position: absolute;
`;

const BigHeader = styled.h1`
  font-family: ${props => props.theme.fonts.playfair};
  font-size: 120px;
  letter-spacing: 5px;
  opacity: 0.1;
  position: absolute;
  z-index: 1;
  right: 60px;
  bottom: -120px;
`;

const GoldLine2 = styled.div`
  min-width: 3px;
  height: 100%;
  background: ${props => props.theme.colors.gold};
  left: 45px;
  top: 25%;
  margin-right: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeader = styled(Header)`
  color: #000;
  letter-spacing: 0;
  margin-bottom: 30px;
`

const Para = styled.p`
  font-family: ${props => props.theme.fonts.montserrat};
`;

const StyledImg = styled(Img)`
position: absolute !important;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
`

const MoreAboutMe = () => {
  const data = useStaticQuery(graphql`
    query MoreAboutImagesQuery {
            file(relativePath: { eq: "gallery2b.jpg" }) {
                childImageSharp {
                    fluid(quality: 100 maxWidth: 1400){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `)
  return (
    <AppWrapper>
      <AboutImage>
        <StyledImg
          fluid={data.file.childImageSharp.fluid}
        />
        <BgLinearGradient />
        <BigHeader>o mnie</BigHeader>
      </AboutImage>
      <AboutTxt>
        <GoldLine2 />
        <TextWrapper>
          <StyledHeader text="Kto za tym stoi ?" />
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore
                    </Para>
        </TextWrapper>
      </AboutTxt>
    </AppWrapper>
  );
}

export default MoreAboutMe
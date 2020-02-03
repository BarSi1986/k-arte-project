import React, { useContext } from 'react'
import styled from "styled-components";
import { graphql, useStaticQuery } from 'gatsby'
import AppContext from '../../context/AppContext'
import Img from 'gatsby-image'

import Header from '../ui_components/H2_header'
import ornament from '../../images/ornament1.svg'

const AppWrapper = styled.div`
  height: 95vh;
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  transition: 1s ${props => props.theme.transitions.cubic_front};
    &.blurred{
        transform: translateX(35px);
        opacity: .3;
    }

    @media (max-width: 750px) {
        &.blurred{
        transform: translateY(-35px);
        opacity: .3;
    }
    height: 110vh;
    
    }
`;

const AboutImage = styled.div`
  width: 80%;
  height: 60%;
  position: absolute;
  right: 0px;
  top:  0px;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const AboutTxt = styled.div`
  width: 800px;
  height: 50%;
  position: absolute;
  left: 10%;
  top: 40%;
  box-shadow: -5px 15px 15px -5px lightgrey;
  padding: 50px;
  background: #fff;
  display: flex;
  @media (max-width: 1000px) {
    width: 550px;
  }
  @media (max-width: 750px) {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: inherit;
    padding: 40px 20px;
    border-radius: 40px 40px 0 0;
  }
`;

const BgLinearGradient = styled.div`
  width: 100px;
  height: 100%;
  background: linear-gradient(0.25turn, #fff, #fff, rgba(255,255,255, .95), transparent);
  position: absolute;

  @media (max-width: 750px) {
    width: 100%;
    height: 100px;
    background: linear-gradient( #fff, transparent);
  }
`;

const BigHeader = styled.h1`
  font-family: ${props => props.theme.fonts.playfair};
  font-size: 150px;
  letter-spacing: 5px;
  opacity: 0.1;
  position: absolute;
  z-index: 1;
  right: -190px;
  bottom: -120px;
  transform: rotate(-90deg);
  @media (max-width: 750px) {
    font-size: 80px;
    right: -110px;
    bottom: 190px;
  }
`;

const GoldLine2 = styled.div`
  min-width: 3px;
  height: 100%;
  background: ${props => props.theme.colors.gold};
  left: 45px;
  top: 25%;
  margin-right: 30px;
  @media (max-width: 750px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 750px) {
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyledHeader = styled(Header)`
  color: #000;
  letter-spacing: 0;
  margin-bottom: 30px;
`

const Para = styled.p`
  font-family: ${props => props.theme.fonts.montserrat};
  @media (max-width: 750px){
    text-align: center;
  }
`;

const StyledImg = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Ornament = styled.img`
  margin-bottom: 30px;
  @media (min-width: 750px) {
      display: none;
  }
`

const MoreAboutMe = () => {
  const { isNavOpen } = useContext(AppContext)
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
    <AppWrapper className={isNavOpen && 'blurred'}>
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
          <Ornament src={ornament} />
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
import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../context/AppContext'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import ScrollContainer from "react-indiana-drag-scroll";

const PortfolioWrapper = styled.div`
  width: 85%;
  position: relative;
  margin: auto;
  transition: 1s ${props => props.theme.transitions.cubic_front};
    &.blurred{
        transform: translateX(-35px);
        opacity: .3;
    }
    @media (max-width: 750px) {
        &.blurred{
        transform: translateY(-35px);
        opacity: .3;
    }
    }
`
const StyledImg = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const DekorialoveSection = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DekorialoveHero = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  @media (max-width: 750px) {
    height: 50vh;
  }

`
const ScandiTitle = styled.div`
  padding: 40px 0;
  width: 40%;
  text-align: center;
  div{
    display: flex;
    flex-direction: column;
    p{
    font-family: ${props => props.theme.fonts.montserrat};
    letter-spacing: 1px;
    
    &:nth-of-type(1){
      font-family: ${props => props.theme.fonts.playfair};
      font-size: 2.5em;
      font-weight: 100;
      margin-bottom: 10px;
      }
    }
  }
  @media (max-width: 750px) {
    padding: 20px 20px;
    width: 100%;
    div{
      p{
        letter-spacing: 1px;
        font-size: 1em;
        padding-right: 20px;
      &:nth-of-type(1){
      font-size: 1.5em;
      font-weight: 400;
      margin-bottom: 15px;
      }
      }
    }
      }
`
const ScandiGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 50px;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 2fr 1fr 1fr 2.4fr;
  grid-template-areas:
  "c c a"
  "c c a"
  "d e f"
  "d e g"
  "h h i";
  margin-bottom: 50px;
    @media (max-width: 750px) {
        width: 400%;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr 2fr 1fr 1fr 1fr;
        grid-template-rows: 2fr 1fr;
        grid-template-areas:
        "c c b b e e d d d"
        "a h h h f g i i i";
      }
`
const GridItem = styled.div`
  min-height: 170px;
  position: relative;
  font-family: ${props => props.theme.fonts.playfair};
  letter-spacing: 2px;
  font-size: 1.8em;
  font-weight: 100;
    &:nth-of-type(1) {
      grid-area: a;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 0 40px;
      background: none;
      color: ${props => props.theme.colors.gold};
      /* text-shadow: 0 0 30px ${props => props.theme.colors.gold}; */
      border: 2px solid ${props => props.theme.colors.gold};
      }
    &:nth-of-type(2) {grid-area: b;}
    &:nth-of-type(3) {grid-area: c;}
    &:nth-of-type(4) {grid-area: d;}
    &:nth-of-type(5) {grid-area: e;}
    &:nth-of-type(6) {grid-area: f;}
    &:nth-of-type(7) {grid-area: g;}
    &:nth-of-type(8) {grid-area: h;}
    &:nth-of-type(9) {grid-area: i;
      display: flex;
      flex-direction: column;
      padding: 30px;
      background: none;
      color: ${props => props.theme.colors.gold};
      /* text-shadow: 0 0 30px ${props => props.theme.colors.gold}; */
      border: 2px solid ${props => props.theme.colors.gold};
    }
    @media (max-width: 750px){
      min-height: 150px;
      font-size: 1.2em;
      &:nth-of-type(1){
        padding: 30px 20px;
        align-items: flex-start;
        justify-content: flex-end;
      }
    }
`

const SectionParis = () => {

  const data = useStaticQuery(graphql`
    query ParisImagesQuery {
        image1: file(relativePath: {eq: "Paris (27).jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1300) {
                ...GatsbyImageSharpFluid
            }
          }
        },
        image2: file(relativePath: {eq: "Paris (8).jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image3: file(relativePath: {eq: "Paris (17).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image4: file(relativePath: {eq: "Paris (1).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 500) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image5: file(relativePath: {eq: "Paris (22).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image6: file(relativePath: {eq: "Paris (6).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image7: file(relativePath: {eq: "Paris (24).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image8: file(relativePath: {eq: "Paris (26).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
      }
    `)

  const { isNavOpen } = useContext(AppContext)
  return (
    <PortfolioWrapper className={isNavOpen && 'blurred'}>

      <DekorialoveSection>
        <DekorialoveHero>
          <StyledImg
            fluid={data.image1.childImageSharp.fluid}
          />
        </DekorialoveHero>

        <ScandiTitle>

        </ScandiTitle>
        <ScrollContainer className="scroll-container">
          <ScandiGrid>
            <GridItem>
              {/* <p>intérieurs lumineux</p> */}
              <div>
                <p>à couper le souffle</p>
                <p>Francuski eklektyzm. Jeśli jesteście fanami gatunku to z pewnością zachwyci was klasyczne mieszkanie przełamujące codzienność pięknymi antykami rodem z belle epoque.</p>
              </div>

            </GridItem>
            <GridItem>
              <StyledImg
                fluid={data.image4.childImageSharp.fluid}
              />
            </GridItem>
            <GridItem>
              <StyledImg
                fluid={data.image2.childImageSharp.fluid}
              />
            </GridItem>
            <GridItem>
              <StyledImg
                fluid={data.image5.childImageSharp.fluid}
              />
            </GridItem>
            <GridItem>
              <StyledImg
                fluid={data.image3.childImageSharp.fluid}
              />
            </GridItem>
            <GridItem>
              <StyledImg
                fluid={data.image6.childImageSharp.fluid}
              />
            </GridItem>
            <GridItem>
              <StyledImg
                fluid={data.image7.childImageSharp.fluid}
              />
            </GridItem>
            <GridItem>
              <StyledImg
                fluid={data.image8.childImageSharp.fluid}
              />
            </GridItem>
            <GridItem>
              <p>combinaison parfaite</p>
            </GridItem>
          </ScandiGrid>
        </ScrollContainer>

      </DekorialoveSection>
    </PortfolioWrapper>
  )
}

export default SectionParis

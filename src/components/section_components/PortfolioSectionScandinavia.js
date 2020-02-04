import React from 'react'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const PortfolioWrapper = styled.div`
  width: 100%;
  position: relative;
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


`
const ScandiTitle = styled.div`
  padding: 40px 0;
  width: 40%;
  div{
    display: flex;
    flex-direction: column;
    p{
    font-family: ${props => props.theme.fonts.montserrat};
    letter-spacing: 3px;
    
    &:nth-of-type(1){
      font-size: 2.5em;
      font-weight: 100;
      }
    }
  }
`
const ScandiGrid = styled.div`
  width: 90%;
  display: grid;
  grid-gap: 10px;
  margin: auto;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr 1fr 2.4fr;
  grid-template-areas:
  "a c c"
  "b c c"
  "d e f"
  "d e g"
  "h h i";
  margin-bottom: 50px;
`
const GridItem = styled.div`
  min-height: 170px;
  position: relative;
  font-family: ${props => props.theme.fonts.montserrat};
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
      background: lightgrey;
      color: white;
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
      background: lightgrey;
      color: white;
    }
`

const PortfolioSectionScandinavia = () => {

  const data = useStaticQuery(graphql`
    query ScandinaviaImagesQuery {
        image1: file(relativePath: {eq: "SCANDI (full) (30 of 50).jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1300) {
                ...GatsbyImageSharpFluid
            }
          }
        },
        image2: file(relativePath: {eq: "SCANDI  (www) (28 of 50).jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image3: file(relativePath: {eq: "SCANDI  (www) (22 of 50).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image4: file(relativePath: {eq: "SCANDI  (www) (14 of 50).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 500) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image5: file(relativePath: {eq: "SCANDI  (www) (7 of 50).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image6: file(relativePath: {eq: "SCANDI  (www) (36 of 50).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image7: file(relativePath: {eq: "SCANDI  (www) (40 of 50).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image8: file(relativePath: {eq: "SCANDI  (www) (1 of 50).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
      }
    `)
  return (
    <PortfolioWrapper>

      <DekorialoveSection>
        <DekorialoveHero>
          <StyledImg
            fluid={data.image1.childImageSharp.fluid}
          />
        </DekorialoveHero>

        <ScandiTitle>
          <div>
            <p>vakkert lyst interiør</p>
            <p>Lekka i jasna Skandynawia w centrum Katowic. Mieszkanie inwestycyjne w sercu śląska, na osiedlu Francuska Prak</p>
          </div>
        </ScandiTitle>

        <ScandiGrid>
          <GridItem>
            <p>beroligende plass</p>
            <p>og et åpent sinn</p>
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
            <p>et interiør</p>
            <p>som inspirerer</p>
          </GridItem>
        </ScandiGrid>


      </DekorialoveSection>
    </PortfolioWrapper>
  )
}

export default PortfolioSectionScandinavia

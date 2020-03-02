import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../context/AppContext'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// import ScrollContainer from "react-indiana-drag-scroll";

const PortfolioWrapper = styled.div`
  width: 100%;
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

const PhotoGrid = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    "a a a a a a a a"
    "b b b c c c c c"
    "d d d d d e e e"
    "f f f g g g g g";
  ;

`

const GridItem = styled.div`
  position: relative;
  &:nth-of-type(1){grid-area: a; min-height: 80vh;}
  &:nth-of-type(2) {grid-area: b; min-height: 60vh;}
  &:nth-of-type(3) {grid-area: c; min-height: 60vh;}
  &:nth-of-type(4) {grid-area: d; min-height: 60vh;}
  &:nth-of-type(5) {grid-area: e; min-height: 60vh;}
  &:nth-of-type(6) {grid-area: f; min-height: 60vh;}
  &:nth-of-type(7) {grid-area: g; min-height: 60vh;}
`

const StyledImg = styled(Img)`
position: absolute !important;
width: 100%;
height: 100%;
z-index: -1;
`

const SectionParis = () => {


  const data = useStaticQuery(graphql`
    query ParisImagesQuery {
        image1: file(relativePath: {eq: "Paris (27).jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
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
          image8: file(relativePath: {eq: "Paris (18).jpg"}) {
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
      <PhotoGrid>
        <GridItem>
          <StyledImg fluid={data.image1.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <StyledImg fluid={data.image5.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <StyledImg fluid={data.image2.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <StyledImg fluid={data.image3.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <StyledImg fluid={data.image6.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <StyledImg fluid={data.image8.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <StyledImg fluid={data.image7.childImageSharp.fluid} />
        </GridItem>
      </PhotoGrid>
    </PortfolioWrapper>
  )
}

export default SectionParis

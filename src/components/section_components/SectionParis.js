import React, { useContext, useState } from 'react'
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
    "b b b b c c c c"
    "d d d d d e e e"
    "f f f g g g g g"
    "h h h h i i i i";
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
  &:nth-of-type(8) {grid-area: h; min-height: 60vh;}
  &:nth-of-type(9) {grid-area: i; min-height: 60vh;}
`

const StyledImg = styled(Img)`
position: absolute !important;
width: 100%;
height: 100%;
z-index: -1;
`

const Caption = styled.p`
  position: absolute;
  left: 20px;
  bottom: 10px;
  width: 250px;
  color: white;
  opacity: 0;
  transition: .4s ease;
  &:nth-of-type(1){
    &::after{
      content: "";
      width: 0px;
      height: 2px;
      background: #fff;
      position: absolute;
      bottom: 5px;
      left: 220px;
      transition: .9s ease;
    }
    &.loaded{
      opacity: 1;
      bottom: 20px;
      &::after{
      width: 200px;
      }
    }
  }
`

const SectionParis = () => {


  const data = useStaticQuery(graphql`
    query ParisImagesQuery {
        image1: file(relativePath: {eq: "paris (27).jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image2: file(relativePath: {eq: "paris (8).jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 981) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image3: file(relativePath: {eq: "paris (17).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 981) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image4: file(relativePath: {eq: "paris (23).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 981) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image5: file(relativePath: {eq: "paris (22).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 981) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image6: file(relativePath: {eq: "paris (6).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 981) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image8: file(relativePath: {eq: "paris (2).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 981) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image7: file(relativePath: {eq: "paris (24).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 981) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image9: file(relativePath: {eq: "paris (13).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 981) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
      }
    `)

  const { isNavOpen } = useContext(AppContext)
  const [load, setLoad] = useState(false)

  return (
    <PortfolioWrapper className={isNavOpen && 'blurred'}>
      <PhotoGrid>
        <GridItem>
          {/* <Caption onLoad={
            setTimeout(() => { setLoad(true) }, 500)

          }
            className={load && "loaded"}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate repellendus quod ab architecto commodi impedit sit earum provident temporibus!</Caption> */}
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
          <StyledImg fluid={data.image4.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <StyledImg fluid={data.image7.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <StyledImg fluid={data.image8.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <StyledImg fluid={data.image9.childImageSharp.fluid} />
        </GridItem>
      </PhotoGrid>
    </PortfolioWrapper>
  )
}

export default SectionParis

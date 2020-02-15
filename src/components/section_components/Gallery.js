import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade';

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../ui_components/H2_header'
import Button from '../ui_components/GoldenButton'



const GalleryWrapper = styled.section`
  overflow: hidden;
  padding-top: 30px;
  margin: 40px 0;
  text-align: center;
  @media (max-width: 750px){
    height: unset;
    margin-bottom: 30px;
    text-align: unset;
}

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



const GridOuterWrapper = styled.div`
  width: 80%;
  margin: auto;
  position: relative;

  @media (max-width: 750px){
    height: unset;
    width: calc(100% - 20px);
}
`
const GridWrapper = styled.div`
  display: grid;
  /* border: 3px solid ${props => props.theme.colors.gold}; */
  /* padding: 10px; */
  /* height: 90vh; */
  width: 100%;
  margin: 10px auto;
  /* overflow: scroll; */


  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 50px;

  grid-template-areas:
    "b b b a "
    "d d c c";

    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
        "a a"
        "b b"
        "c c"
        "d d";

        height: unset;
    }
`

const GridHover = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 2%;
height: 0%;

/* width: 85%;
height: 85%; */

background: rgba(0,0,0,.4);
z-index: 5;
padding: 0px;
transition: height .2s ease, width .3s ease .2s;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const GridHoverHeader = styled.h2`
  position: relative;
  font-family: ${props => props.theme.fonts.montserrat};
  font-weight: 100;
  color: #fff;
  transform: translateY(5px);
  opacity: 0;
    &::after{
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      height: 4px;
      width: 50px;
      background: ${props => props.theme.colors.gold};
}
  
`

const GridItem = styled.div`
background-size: cover;
background-position: center;
overflow: hidden;
cursor: pointer;
min-height: 400px;
position: relative;
&:nth-of-type(1){grid-area: a;}
&:nth-of-type(2) {grid-area: b;}
&:nth-of-type(3) {grid-area: c;}
&:nth-of-type(4) {grid-area: d;}
@media (max-width: 750px){
min-height: 280px;
}
&:hover{
& ${GridHover}{
  height: 85%;
  width: 85%;
  }
& ${GridHoverHeader}{
  transition: .3s ease-in .4s;
  opacity: 1;
  transform: translateY(0px);
}
}
@media (min-width: 1560px){
  min-height: 450px;
}
`

const StyledImg = styled(Img)`
position: absolute !important;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 100%;
height: 100%;
z-index: -1;
img{
  transition: 1s ease !important;
}
`


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  align-items: center;
  width: 100%;
  z-index: 1;
  @media (max-width: 750px) {
    width: 100%;
    height: 100px;
    padding: 0 20px;
    align-items: flex-start;
  }
`
const StyledHeader = styled(Header)`  
  @media (max-width: 750px) {
    margin-bottom: 20px;
  }
`

const Ornament = styled.div`
    width: 130px;
    margin: 20px 0;
    position: relative;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 50px;
    background: ${props => props.theme.colors.gold};
    @media (max-width: 750px) {
      margin: 5px 0;
    }
`

const StyledBtn = styled(Button)`
  margin: 30px;
  @media (max-width: 750px){
    margin: 30px 10px;
  }
`




const Gallery = () => {
  const data = useStaticQuery(graphql`
  query GalleryImagesQuery {
      image1: file(relativePath: {eq: "SCANDI  (www) (22 of 50).jpg"}) {
        childImageSharp {
          fluid (quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid
          }
        }
      },
      image2: file(relativePath: {eq: "gallery6c.jpg"}) {
        childImageSharp {
          fluid (quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid    
          }
        }
      },
      image3: file(relativePath: {eq: "gallery-bauhaus.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image4: file(relativePath: {eq: "gallery-london.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
    }
  `)
  const { isNavOpen } = useContext(AppContext)



  return (
    <GalleryWrapper className={isNavOpen && 'blurred'}>
      <Fade bottom cascade>
        <HeaderWrapper>
          <StyledHeader text='WYBRANE REALIZACJE' />
          <Ornament />
        </HeaderWrapper>
      </Fade>
      <GridOuterWrapper>
        <GridWrapper>
          <GridItem>
            <StyledImg
              fluid={data.image1.childImageSharp.fluid}
            />
            <GridHover>
              <GridHoverHeader>LYST INTERIØR</GridHoverHeader>
            </GridHover>
          </GridItem>

          <GridItem>
            <StyledImg
              fluid={data.image2.childImageSharp.fluid}
            />
            <GridHover>
              <GridHoverHeader>
                ÉCLECTISME FRANÇAIS</GridHoverHeader>
            </GridHover>
          </GridItem>

          <GridItem>
            <StyledImg
              fluid={data.image3.childImageSharp.fluid}
            />
            <GridHover>
              <GridHoverHeader>
                WEIMAR BAUHAUS</GridHoverHeader>
            </GridHover>
          </GridItem>

          <GridItem>
            <StyledImg
              fluid={data.image4.childImageSharp.fluid}
            />
            <GridHover>
              <GridHoverHeader>
                LONDON BABY !</GridHoverHeader>
            </GridHover>
          </GridItem>
        </GridWrapper>
      </GridOuterWrapper>
      <Link to="/portfolio">
        <StyledBtn text="Zobacz więcej" />
      </Link>
    </GalleryWrapper >

  )
}

export default Gallery

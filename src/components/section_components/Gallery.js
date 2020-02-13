import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade';

// import ornament from '../../images/ornament1.svg'
import Header from '../ui_components/H2_header'
import Button from '../ui_components/GoldenButton'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

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
  margin: 30px auto;
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

const StyledImg = styled(Img)`
position: absolute !important;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 100%;
height: 100%;
z-index: -1;
img{
  transition: .3s ease !important;
}
`

const GridItem = styled.div`
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: pointer;
  transition: .3s ease !important;
  min-height: 400px;
  position: relative;
  &:nth-of-type(1){grid-area: a;}
  &:nth-of-type(2) {grid-area: b;}
  &:nth-of-type(3) {grid-area: c;}
  &:nth-of-type(4) {grid-area: d;}
  /* &:nth-of-type(5) {grid-area: e;}
  &:nth-of-type(6) {grid-area: f;} */
  @media (max-width: 750px){
    min-height: 280px;
  }
  &:hover{
      img{
        width: 110% !important;
        height: 110% !important;
        transform: translate(-5%,-5%);
      }
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
      image3: file(relativePath: {eq: "gallery4.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image4: file(relativePath: {eq: "gallery4b.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image5: file(relativePath: {eq: "gallery1.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image6: file(relativePath: {eq: "gallery6c.jpg"}) {
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
          </GridItem>

          <GridItem>
            <StyledImg
              fluid={data.image2.childImageSharp.fluid}
            />
          </GridItem>

          <GridItem>
            <StyledImg
              fluid={data.image3.childImageSharp.fluid}
            />
          </GridItem>

          <GridItem>
            <StyledImg
              fluid={data.image4.childImageSharp.fluid}
            />
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

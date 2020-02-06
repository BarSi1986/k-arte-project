import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'
import { Link } from 'gatsby'

import ornament from '../../images/ornament1.svg'
import Header from '../ui_components/H2_header'
import Button from '../ui_components/GoldenButton'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const GalleryWrapper = styled.section`
  overflow: hidden;
  padding-top: 30px;
  @media (max-width: 750px){
    height: unset;
    margin-bottom: 30px;
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
   text-align: center;
`



const GridOuterWrapper = styled.div`
  width: 85%;
  margin: auto;
  position: relative;

  @media (max-width: 750px){
    height: unset;
    width: 95%;
}
`
const GridWrapper = styled.div`
  display: grid;
  border: 3px solid ${props => props.theme.colors.gold};
  padding: 10px;
  /* height: 90vh; */
  width: 100%;
  margin: auto;
  /* overflow: scroll; */


  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;

  grid-template-areas:
    "a a b b b b e e"
    "c c c d d f f f";
    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 1fr);
 
      grid-template-areas:
        "a a"
        "b b"
        "c c"
        "d d"
        "e e"
        "f f";

        height: unset;
    }
`

const GridItem = styled.div`
  background-size: cover;
  background-position: center;
  min-height: 350px;
  position: relative;
  &:nth-of-type(1){grid-area: a;}
  &:nth-of-type(2) {grid-area: b;}
  &:nth-of-type(3) {grid-area: c;}
  &:nth-of-type(4) {grid-area: d;}
  &:nth-of-type(5) {grid-area: e;}
  &:nth-of-type(6) {grid-area: f;}
  @media (max-width: 750px){
    min-height: 280px;
  }
`

const WordSkrojone = styled.h2`
  font-size: 10em;
  opacity: 0.08;
  position: absolute;
  margin: 0;
  top: 180px;
  left: -350px;
  transform: rotate(-90deg);
  font-family: ${props => props.theme.fonts.playfair};
  @media (max-width: 750px) {
    top: 250px;
  }
`

const WordNaMiare = styled.h2`
  font-size: 10em;
  opacity: 0.08;
  position: absolute;
  margin: 0;
  bottom: 200px;
  right: -350px;
  transform: rotate(90deg);
  font-family: ${props => props.theme.fonts.playfair};
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
  color: ${props => props.theme.colors.grey};   
  font-weight: bold;
  @media (max-width: 750px) {
    margin-bottom: 20px;
  }
`
const Ornament = styled.img`
    width: 130px;
    position: static;
    transform: translateY(-10px);
    margin: auto;
    @media (max-width: 750px) {
    margin: 0;
    transform: translateY(0px);
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

const StyledBtn = styled(Button)`
  margin: 30px;
`




const Gallery = () => {
  const data = useStaticQuery(graphql`
  query GalleryImagesQuery {
      image1: file(relativePath: {eq: "SCANDI  (www) (22 of 50).jpg"}) {
        childImageSharp {
          fluid (quality: 100, maxWidth: 1440) {
              ...GatsbyImageSharpFluid
          }
        }
      },
      image2: file(relativePath: {eq: "gallery3.jpg"}) {
        childImageSharp {
          fluid (quality: 100, maxWidth: 1440) {
              ...GatsbyImageSharpFluid    
          }
        }
      },
      image3: file(relativePath: {eq: "gallery4.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image4: file(relativePath: {eq: "gallery4b.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image5: file(relativePath: {eq: "gallery5f.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image6: file(relativePath: {eq: "gallery6c.jpg"}) {
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
    <GalleryWrapper className={isNavOpen && 'blurred'}>
      <HeaderWrapper>
        <StyledHeader text='Realizacje' />
        <Ornament src={ornament} />
      </HeaderWrapper>
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

          <GridItem>
            <StyledImg
              fluid={data.image5.childImageSharp.fluid}
            />
          </GridItem>

          <GridItem>
            <StyledImg
              fluid={data.image6.childImageSharp.fluid}
            />
          </GridItem>

        </GridWrapper>

        <WordSkrojone>Skrojone</WordSkrojone>
        <WordNaMiare>Na miarę</WordNaMiare>

      </GridOuterWrapper>
      <Link to="/portfolio">
        <StyledBtn text="Zobacz więcej" />
      </Link>
    </GalleryWrapper >

  )
}

export default Gallery

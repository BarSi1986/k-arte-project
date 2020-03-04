import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Parallax } from 'react-scroll-parallax'


const OuterWrapper = styled.section`
position: relative;
height: 100vh;
`

const HomeWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
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
    margin-bottom: -50px;
    }
    
   
`
const MixedBg = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     
    @media (min-width: 750px) {
        mix-blend-mode: multiply;
    }
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: .4;
        z-index: -1;
        background: #000;
    }
`
const Header1 = styled.h1`
    position: absolute;
    font-family: ${props => props.theme.fonts.montserrat};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    color: ${props => props.theme.colors.white};
    font-size: 5em;
    margin: 0;
    font-weight: 200;
    z-index: 10;
    @media (max-width: 750px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        transform: translate(-50%,-70%);
        font-size: 3em;
        padding: 20px;
        text-align: center;
    }
`

const StyldImg = styled(Img)`
position: absolute !important;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
`

const MoreAboutMe = () => {
  const data = useStaticQuery(graphql`
    query MoreAboutImageQuery {
        file(relativePath: { eq: "more-about-me.jpg" }) {
            childImageSharp {
                fluid(quality: 80 maxWidth: 1300){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
  const { isNavOpen } = useContext(AppContext)
  return (
    <OuterWrapper>
      <Header1>more about me</Header1>
      <Parallax y={[-20, 20]}>
        <HomeWrapper className={isNavOpen && 'blurred'}>
          <StyldImg
            fluid={data.file.childImageSharp.fluid}
          />
          <MixedBg />
        </HomeWrapper>
      </Parallax>
    </OuterWrapper >
  )
}

export default MoreAboutMe

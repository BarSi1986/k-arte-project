import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const HomeWrapper = styled.section`
    position: relative;
    width: 100%;
    height: 95vh;
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
    }
`
const MixedBg = styled.div`
    position: absolute;
    background: ${props => props.theme.colors.grey};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply; 
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Header1 = styled.h1`
    position: absolute;
    font-family: ${props => props.theme.fonts.montserrat};
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 19%);
    color: ${props => props.theme.colors.white};
    font-size: 51vw;
    margin: 0;
   

    @media (max-width: 750px) {
        position: absolute;
        bottom: 50%;
        transform: translate(-50%, 45%);
        display: flex;
        flex-direction: column;
        /* justify-content: flex-start;
        align-items: center; */
        font-size: 60vw;
        padding: 20px;
        border: 8px solid white;
        span{
            height: 180px;
            transform: translateY(-60px);
        }
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

const Hero = () => {
    const data = useStaticQuery(graphql`
    query HeroImageQuery {
        file(relativePath: { eq: "bg.jpg" }) {
            childImageSharp {
                fluid(quality: 100 maxWidth: 1440){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    const { isNavOpen } = useContext(AppContext)
    return (
        <HomeWrapper className={isNavOpen && 'blurred'}>
            <StyldImg
                fluid={data.file.childImageSharp.fluid}
            />
            <MixedBg>
                <Header1><span>ar</span><span>te</span></Header1>
            </MixedBg>
        </HomeWrapper>
    )
}

export default Hero

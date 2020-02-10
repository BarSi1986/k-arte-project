import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Parallax } from 'react-scroll-parallax'


const OuterWrapper = styled.section`
position: relative;
`

const HomeWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 101vh;
    overflow: hidden;
    margin-bottom: -40px;
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
    background: #666;
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
    font-size: 10vw;
    margin: 0;
    font-weight: 200;
    z-index: 10;
    @media (max-width: 750px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        transform: translate(-50%,-55%);
        /* justify-content: flex-start;
        align-items: center; */
        font-size: 60vw;
        padding: 20px;
        border: 8px solid white;
        opacity: .9;
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
                fluid(quality: 100 maxWidth: 1366){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    const { isNavOpen } = useContext(AppContext)


    return (
        <OuterWrapper>
            <Header1><span>ar</span><span>te</span></Header1>
            <Parallax y={[-30, 30]}>
                <HomeWrapper className={isNavOpen && 'blurred'}>
                    <StyldImg
                        fluid={data.file.childImageSharp.fluid}
                    />
                    <MixedBg>

                    </MixedBg>
                </HomeWrapper>
            </Parallax>
        </OuterWrapper>
    )
}

export default Hero

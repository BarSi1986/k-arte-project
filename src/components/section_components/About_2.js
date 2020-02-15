import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link } from "gatsby"
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// import ornament from '../../images/ornament1.svg'

import Button from '../ui_components/GoldenButton'
import Header from '../ui_components/H2_header'

const AboutWrapper = styled.section`
    box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.2);
    width: 80%;
    position: relative;
    height: 95vh;
    margin: -100px auto 150px auto;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 750px) {
        flex-direction: column-reverse;
        align-items: center;
        height: unset;
        width: 100%;
        margin: -50px auto 0px auto;
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
    border-radius: 20px 20px 0 0;
    }
`

const StoryWrapper = styled.div`
    width: 50%;
    height: 100%;
    padding: 140px 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    background: #fff;
    @media (max-width: 750px) {
       width: 100%;
       padding: 50px 20px;
    }
`

const AboutPara = styled.p`
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 1em;
    font-weight: 100;
    color: ${props => props.theme.colors.dark_grey};
    letter-spacing: 1px;
    /* text-align: center; */
`

const HeaderWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
position: relative;
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
`

const AboutImage = styled.div`
    width: 50%;
    height: 100%;
    position: relative;

    @media (max-width: 750px) {
        height: 90vh;
        width: 100%;
        background: #fff;
        margin-bottom: 10px;
    }
`

const StyledImg = styled(Img)`
position: absolute !important;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 100%;
height: 100%;
z-index: 1;
@media (max-width: 750px){
    width: calc(100% - 20px);
    height: 100%;
}

`


const About = () => {
    const data = useStaticQuery(graphql`
    query About2ImagesQuery {
            file(relativePath: { eq: "about_2c.jpg" }) {
                childImageSharp {
                    fluid(quality: 100 maxWidth: 800){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `)

    const { isNavOpen } = useContext(AppContext)
    return (
        <AboutWrapper className={isNavOpen && 'blurred'}>
            <AboutImage>
                <StyledImg
                    fluid={data.file.childImageSharp.fluid}
                />
            </AboutImage>
            <StoryWrapper>
                <Fade bottom cascade>
                    <HeaderWrapper>
                        <Header text="SŁOWEM WSTĘPU" />
                        <Ornament />
                    </HeaderWrapper>

                    <AboutPara>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel provident iste repellat dolorum, dolor hic perspiciatis facilis in porro delectus magnam adipisci, et fugit natus. Aliquid fuga explicabo natus odit veniam voluptas enim dolorum.</AboutPara>
                </Fade>
                <Fade bottom>
                    <Link to="/o-mnie">
                        <Button text="Dowiedz się więcej" />
                    </Link>
                </Fade>
            </StoryWrapper>

        </AboutWrapper>

    )
}

export default About

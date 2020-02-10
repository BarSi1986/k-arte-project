import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link } from "gatsby"
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import ornament from '../../images/ornament1.svg'

import Button from '../ui_components/GoldenButton'
import Header from '../ui_components/H2_header'

const AboutWrapper = styled.section`
    position: relative;
    background: #fff;
    height: 50vh;
    margin: 0 0px;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 750px) {
        flex-direction: column-reverse;
        align-items: center;
        height: unset;
        padding: 0;
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
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    background: #fff;
    @media (max-width: 750px) {
       width: 100%;
       padding: 20px;
    }
`

const AboutPara = styled.p`
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 1em;
    font-weight: 100;
    color: #000;
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

const Ornament = styled.img`
    width: 130px;
    margin: 20px 0;
`

const AboutImage = styled.div`
    width: 50%;
    height: 100%;
    position: relative;

    @media (max-width: 750px) {
        height: 30vh;
        width: 100%;
    }
`

const StyledImg = styled(Img)`
position: absolute !important;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 70%;
height: 80%;
z-index: 1;
@media (max-width: 750px){
    width: 100%;
height: 100%;
}

`


const About = () => {
    const data = useStaticQuery(graphql`
    query AboutImagesQuery {
            file(relativePath: { eq: "about_img.jpg" }) {
                childImageSharp {
                    fluid(quality: 100 maxWidth: 600){
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
                        <Header text="Słowem wstępu" />
                        <Ornament src={ornament} />
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

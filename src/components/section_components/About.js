import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import ornament from '../../images/ornament1.svg'

import Button from '../ui_components/GoldenButton'
import Header from '../ui_components/H2_header'

const AboutWrapper = styled.section`
    height: 50vh;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        height: unset;
    }
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

const StoryWrapper = styled.div`
    width: 50%;
    height: 100%;
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    background: ${props => props.theme.colors.dark_red};
    @media (max-width: 750px) {
       width: 100%;
       padding: 20px;
    }
`

const AboutPara = styled.p`
    font-family: ${props => props.theme.fonts.titillium};
    font-size: 1.3em;
    font-weight: 200;
    color: ${props => props.theme.colors.white};
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
    width: 150px;
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
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
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
                <HeaderWrapper>
                    <Header text="Słowem wstępu" />
                    <Ornament src={ornament} />
                </HeaderWrapper>
                <AboutPara>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel provident iste repellat dolorum, dolor hic perspiciatis facilis in porro delectus magnam adipisci, et fugit natus. Aliquid fuga explicabo natus odit veniam voluptas enim dolorum.</AboutPara>
                <Button text="Dowiedz się więcej" />
            </StoryWrapper>

        </AboutWrapper>
    )
}

export default About

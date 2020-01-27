import React from 'react'
import styled from 'styled-components'

import ornament from '../../images/ornament1.svg'
import aboutImg from '../../images/about_img.jpg'

import Button from '../ui_components/GoldenButton'

const AboutWrapper = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
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
`

const AboutHeader = styled.h2`
    margin: 0;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.playfair};
    font-size: 3em;
    letter-spacing: 5px;
`

const AboutPara = styled.p`
    font-family: ${props => props.theme.fonts.titillium};
    font-size: 1.3em;
    font-weight: 200;
    color: ${props => props.theme.colors.white};
    letter-spacing: 1px;
`

const Ornament = styled.img`
    width: 250px;
    margin: 20px 0;
`

const AboutImage = styled.div`
    width: 50%;
    height: 100%;
    background: url(${aboutImg});
    background-size: cover;
    background-position: center bottom;
`


const About = () => {
    return (
        <AboutWrapper>
            <AboutImage />
            <StoryWrapper>
                <AboutHeader>Our Story</AboutHeader>
                <Ornament src={ornament} />
                <AboutPara>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel provident iste repellat dolorum, dolor hic perspiciatis facilis in porro delectus magnam adipisci, et fugit natus. Aliquid fuga explicabo natus odit veniam voluptas enim dolorum.</AboutPara>
                <Button text="VIEW MORE" />
            </StoryWrapper>

        </AboutWrapper>
    )
}

export default About

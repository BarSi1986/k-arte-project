import React from 'react'
import styled from 'styled-components'

import ornament from '../../images/ornament1.svg'
import aboutImg from '../../images/about_img.jpg'

import Button from '../ui_components/GoldenButton'
import Header from '../ui_components/H2_header'

const AboutWrapper = styled.section`
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
    background: url(${aboutImg});
    background-size: cover;
    background-position: center bottom;
`


const About = () => {
    return (
        <AboutWrapper>
            <AboutImage />
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

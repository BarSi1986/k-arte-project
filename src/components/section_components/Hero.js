import React from "react"
import styled from 'styled-components'

// images
import background from '../../images/bg.jpg'
// font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const HomeWrapper = styled.section`
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;

    background: url(${background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`
const MixedBg = styled.div`
    position: absolute;
    background: ${props => props.theme.colors.grey};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply; 
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
`

const StyledIcon = styled(FontAwesomeIcon)`
    position: absolute;
    color: ${props => props.theme.colors.beige};
    font-size: 1.3em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s ${props => props.theme.transitions.cubic_back};
`

const StyledBtn = styled.button`
    position: absolute;
    z-index: 50;
    width: 50px;
    height: 50px;
    background: transparent;
    border: 3px solid ${props => props.theme.colors.beige};
    border-radius: 50%;
    cursor: pointer;
    transition: all 1s ${props => props.theme.transitions.cubic_back};
    &:hover{
        border-color: ${props => props.theme.colors.gold};
        transform: translateY(5px);
        svg{
            color: ${props => props.theme.colors.gold};
        }
    }
`

const Hero = () => {
    return (
        <HomeWrapper>
            <StyledBtn style={{ top: '50px', right: '50px' }}>
                <StyledIcon icon={faBars} />
            </StyledBtn>

            <StyledBtn style={{ top: '50px', right: '250px' }}>
                <StyledIcon icon={faFacebookF} />
            </StyledBtn>

            <StyledBtn style={{ top: '50px', right: '350px' }}>
                <StyledIcon icon={faInstagram} />
            </StyledBtn>

            <StyledBtn style={{ top: '50px', right: '450px' }}>
                <StyledIcon icon={faPhone} />
            </StyledBtn>
            <MixedBg>
                <Header1><span>ar</span><span>te</span></Header1>

            </MixedBg>
        </HomeWrapper>
    )
}

export default Hero

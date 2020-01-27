import React from "react"
import styled from 'styled-components'

// images
import background from '../../images/bg.jpg'
// font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const HomeWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;

    background: url(${background});
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; */
`
const MixedBg = styled.div`
    position: absolute;
    background: #444444;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply; 
`
const Header1 = styled.h1`
    position: absolute;
    font-family: ${props => props.theme.montserrat};
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 18%);
    color: #fff;
    font-size: 53vw;
    margin: 0;
`

const StyledIcon = styled(FontAwesomeIcon)`
    position: absolute;
    color: #fff;
    font-size: 1.3em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`

const StyledBtn = styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    background: transparent;
    border: 3px solid #fff;
    border-radius: 50%;
    cursor: pointer;
`

const Hero = () => {
    return (
        <HomeWrapper>

            <MixedBg>
                <Header1><span>ar</span><span>te</span></Header1>
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
            </MixedBg>
        </HomeWrapper>
    )
}

export default Hero

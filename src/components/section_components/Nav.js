import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const NavWrapper = styled.section`
    position: fixed;
    width: 100%;
    height: 70px;
    background: rgba(1, 1, 1, 0);
    bottom: calc(100%-70px);
    right: 0;
    z-index: 50;
    @media (max-width: 750px) {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 50;
        height: 10vh;
        background: #111;
        /* opacity: .9; */
        width: 100%;

        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
    }
   
`

const StyledIcon = styled(FontAwesomeIcon)`
    position: absolute;
    color: ${props => props.theme.colors.white};
    font-size: 1.3em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s ${props => props.theme.transitions.cubic_back};
    @media (max-width: 750px) {
        position: initial;
        transform: translate(0, 0);
    }
`

const StyledBtn = styled.button`
    position: absolute;
    z-index: 50;
    width: 50px;
    height: 50px;
    background: transparent;
    border: none;
    opacity: .7;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: all 1s ${props => props.theme.transitions.cubic_back};
    &:hover{
        border-color: ${props => props.theme.colors.gold};
        transform: translateY(5px);
        svg{
            color: ${props => props.theme.colors.gold};
        }
    }
    @media (max-width: 750px) {
        position: initial;
        text-align: center;
        border: none;
        &:hover{
            transform: translateY(0px);
        }
    }
`

const Nav = () => {

    const { isNavOpen, handleNavOpen } = useContext(AppContext)

    return (
        <NavWrapper>
            <StyledBtn
                onClick={handleNavOpen}
                style={{ top: '10px', right: '50px', zIndex: '150' }}>
                <StyledIcon icon={isNavOpen ? faTimes : faBars} />
            </StyledBtn>

            <StyledBtn style={{ top: '10px', right: '150px' }}>
                <StyledIcon icon={faFacebookF} />
            </StyledBtn>

            <StyledBtn style={{ top: '10px', right: '250px' }}>
                <StyledIcon icon={faInstagram} />
            </StyledBtn>

            <StyledBtn style={{ top: '10px', right: '350px' }}>
                <StyledIcon icon={faPhone} />
            </StyledBtn>
        </NavWrapper>
    )
}

export default Nav

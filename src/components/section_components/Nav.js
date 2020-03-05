import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faTimes, faStream, faHome } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const NavWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 60px;
    transition: .5s ease;
    bottom: calc(100%-70px);
    right: 0;
    z-index: 50;
    @media (max-width: 750px) {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 50;
        height: 8vh;
        background: ${props => props.theme.colors.white};
        /* opacity: .9; */
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
    }
    @media (min-width: 751px) {
        &.scrolled{
            button{
                svg{
            color: #484848;
            }   
        }

    }
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
        color: ${props => props.theme.colors.material_grey};
    }
`

const StyledBtn = styled.button`
    position: absolute;
    z-index: 55;
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
        /* svg{
            color: ${props => props.theme.colors.gold};
        } */
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

const StyledBtn2 = styled.button`
    display: none;
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
        /* svg{
            color: ${props => props.theme.colors.gold};
        } */
    }
    @media (max-width: 750px) {
        display: initial;
        position: initial;
        text-align: center;
        border: none;
        &:hover{
            transform: translateY(0px);
        }
    }
`

const WhiteBg = styled.div`
  width: 100%;
  position: fixed;
  height: 60px;
  top: 0;
  background: transparent;
  transition: .5s ease;
  z-index: 30;
  @media (min-width: 751px){
        &.scrolled{
            background: rgba(255, 255, 255, .9);
        }
    }
`

const Nav = () => {

    const { isNavOpen, handleNavOpen, scrolled } = useContext(AppContext)

    return (
        <>
            <WhiteBg className={scrolled && "scrolled"} />
            <NavWrapper className={scrolled && "scrolled"}>
                <StyledBtn
                    onClick={handleNavOpen}
                    style={{ top: '10px', right: '50px', zIndex: '150' }}>
                    <StyledIcon icon={isNavOpen ? faTimes : faStream} />
                </StyledBtn>

                <StyledBtn style={{ top: '10px', right: '150px' }}>
                    <StyledIcon icon={faFacebookF} />
                </StyledBtn>

                <StyledBtn2 style={{ top: '10px', right: '150px' }}>
                    <StyledIcon icon={faHome} />
                </StyledBtn2>

                <StyledBtn style={{ top: '10px', right: '250px' }}>
                    <StyledIcon icon={faInstagram} />
                </StyledBtn>

                <StyledBtn style={{ top: '10px', right: '350px' }}>
                    <StyledIcon icon={faPhone} />
                </StyledBtn>
            </NavWrapper>
        </>
    )
}

export default Nav

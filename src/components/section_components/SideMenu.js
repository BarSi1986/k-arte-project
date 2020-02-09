import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'
import { Link } from "gatsby"
import logo from '../../images/logo.png'

const SideMenuWrapper = styled.div`
    position: fixed;
    width: 450px;
    height: 100vh;
    z-index: 40;
    bottom:0;
    right:0;
    background: #111;
    transition: transform .5s ${props => props.theme.transitions.cubic_front};
    transform: translateX(100%);
    @media (max-width: 750px){
        transform: translateY(100%);
        width: 100%;
        height: 60vh;
        &.nav__open{
        transform: translateY(0);
    }
    }
    &.nav__open{
        transform: translateX(0%);
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SideMeuButton = styled.button`
    background: none;
    border: none;
    margin: 15px;
    cursor: pointer;
    outline-color: ${props => props.theme.colors.gold};
    a{
        font-family: ${props => props.theme.fonts.montserrat};
        font-size: 2em;
        letter-spacing: 0px;
        font-weight: 100;
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
    }
    &:hover{
        a{
            color: ${props => props.theme.colors.gold};
        }
    }
    @media (max-width: 750px){
        a{
        font-size: 1.5em;
    }
    }
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    @media (max-width: 750px){
        bottom: unset;
        top: 50px;
    }
`

const SideMenu = () => {
    const { isNavOpen, handleNavOpen } = useContext(AppContext)

    return (
        <SideMenuWrapper className={isNavOpen && 'nav__open'}>
            <SideMeuButton onClick={handleNavOpen}>
                <Link to="/" activeStyle={{ color: '#DFBA7F' }}>home</Link>
            </SideMeuButton>
            <SideMeuButton onClick={handleNavOpen}>
                <Link to="/o-mnie" activeStyle={{ color: '#DFBA7F' }}>o mnie</Link>
            </SideMeuButton>
            <SideMeuButton onClick={handleNavOpen}>
                <Link to="/portfolio" activeStyle={{ color: '#DFBA7F' }}>portfolio</Link>
            </SideMeuButton>
            <Logo src={logo} />

        </SideMenuWrapper >
    )
}

export default SideMenu

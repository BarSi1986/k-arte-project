import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'
import { Link } from "gatsby"

const SideMenuWrapper = styled.div`
padding-top: 30px;
    position: fixed;
    width: 25%;
    height: 100vh;
    z-index: 30;
    bottom:0;
    left:0;
    background: #111;
    transition: transform .5s ${props => props.theme.transitions.cubic_front};
    transform: translateX(-100%);
    @media (max-width: 750px){
        transform: translateY(100%);
        width: 100%;
        height: 60vh;
        &.nav__open{
        transform: translateY(0);
    }
    }
    &.nav__open{
        transform: translateX(0);
    }

    display: flex;
    flex-direction: column;
    opacity: .95;
`

const SideMeuButton = styled.button`
    background: none;
    border: none;
    padding: 20px;
    cursor: pointer;
    outline-color: ${props => props.theme.colors.gold};
    a{
        font-family: ${props => props.theme.fonts.montserrat};
        font-size: 3em;
        letter-spacing: 0px;
        font-weight: 100;
        color: ${props => props.theme.colors.white};
        text-decoration: none;
    }
    &:hover{
        a{
            color: ${props => props.theme.colors.dark_red};
        }
    }
    @media (max-width: 750px){
        a{
        font-size: 1.5em;
    }
    }
`

const SideMenu = () => {
    const { isNavOpen, handleNavOpen } = useContext(AppContext)

    return (
        <SideMenuWrapper className={isNavOpen && 'nav__open'}>
            <SideMeuButton onClick={handleNavOpen}>
                <Link to="/" activeStyle={{ color: '#6A0B0B' }}>home</Link>
            </SideMeuButton>
            <SideMeuButton onClick={handleNavOpen}>
                <Link to="/o-mnie" activeStyle={{ color: '#6A0B0B' }}>o mnie</Link>
            </SideMeuButton>
            <SideMeuButton onClick={handleNavOpen}>
                <Link to="/portfolio" activeStyle={{ color: '#6A0B0B' }}>portfolio</Link>
            </SideMeuButton>
            <SideMeuButton onClick={handleNavOpen}>
                <Link to="/kontakt" activeStyle={{ color: '#6A0B0B' }}>kontakt</Link>
            </SideMeuButton>

        </SideMenuWrapper >
    )
}

export default SideMenu

import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'

const SideMenuWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 60vh;
    z-index: 30;
    bottom:0;
    left:0;
    background: #111;
    transition: transform .5s ${props => props.theme.transitions.cubic_front};
    transform: translateY(100%);
    &.nav__open{
        transform: translateY(0);
    }
`

const SideMenu = () => {
    const { isNavOpen } = useContext(AppContext)
    return (
        <SideMenuWrapper className={isNavOpen && 'nav__open'}>

        </SideMenuWrapper>
    )
}

export default SideMenu

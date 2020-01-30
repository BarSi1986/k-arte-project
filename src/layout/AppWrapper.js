import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import styled from 'styled-components'

import Nav from '../components/section_components/Nav'
import Hero from '../components/section_components/Hero'
import About from '../components/section_components/About'
import Gallery from '../components/section_components/Gallery'
import Contact from '../components/section_components/Contact'
import SideMenu from '../components/section_components/SideMenu'

const Wrapper = styled.div`

`

const SectionsWrapper = styled.div`
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


const AppWrapper = () => {

    const { isNavOpen } = useContext(AppContext)

    return (
        <Wrapper>
            <SectionsWrapper className={isNavOpen && 'blurred'}>
                <Hero />
                <About />
                <Gallery />
                <Contact />
            </SectionsWrapper>
        </Wrapper>
    )
}

export default AppWrapper
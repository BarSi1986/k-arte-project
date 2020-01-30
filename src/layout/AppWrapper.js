import React from 'react'
// import AppContext from '../context/AppContext'
import styled from 'styled-components'

// import Nav from '../components/section_components/Nav'
import Hero from '../components/section_components/Hero'
import About from '../components/section_components/About'
import Gallery from '../components/section_components/Gallery'
import Contact from '../components/section_components/Contact'
// import SideMenu from '../components/section_components/SideMenu'

const Wrapper = styled.div`

`


const AppWrapper = () => {
    return (
        <Wrapper>
            <Hero />
            <About />
            <Gallery />
            <Contact />
        </Wrapper>
    )
}

export default AppWrapper
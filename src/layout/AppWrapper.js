import React from 'react'
import styled from 'styled-components'

import Hero from '../components/section_components/Hero'
import About from '../components/section_components/About'
import Gallery from '../components/section_components/Gallery'
import Contact from '../components/section_components/Contact'

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
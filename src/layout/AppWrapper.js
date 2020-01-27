import React from 'react'
import styled from 'styled-components'

import Hero from '../components/section_components/Hero'
import About from '../components/section_components/About'
import Gallery from '../components/section_components/Gallery'

const Wrapper = styled.div`

`
const AppWrapper = () => {
    return (
        <Wrapper>
            <Hero />
            <About />
            <Gallery />
        </Wrapper>
    )
}

export default AppWrapper
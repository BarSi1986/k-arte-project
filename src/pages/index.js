import React from "react"
import AppWrapper from '../layout/AppWrapper'

import Layout from '../layout/Layout'

import Hero from '../components/section_components/Hero'
import About from '../components/section_components/About'
import Gallery from '../components/section_components/Gallery'
import Contact from '../components/section_components/Contact'

export default () => (
    <>
        <Hero />
        <About />
        <Gallery />
        <Contact />
    </>
)
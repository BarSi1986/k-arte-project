import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import AppContext from '../context/AppContext'
import { ParallaxProvider } from 'react-scroll-parallax';
import 'normalize.css'
import '../styles/styles.css'

import Footer from '../components/section_components/Footer'
import SideMenu from '../components/section_components/SideMenu'
import Nav from '../components/section_components/Nav'


const theme = {
    fonts: {
        montserrat: "'Montserrat', sans-serif",
        playfair: "'Playfair Display', serif",
        titillium: "'Titillium Web', sans-serif",
    },
    colors: {
        white: '#ffffff',
        beige: '#FDFCF4',
        gold: '#DFBA7F',
        grey: '#3F3F3F',
        lightgrey: '#4D4D4D',
        darkgrey: '#313131',
        material_grey: '#121212',
        dark_red: '#6A0B0B',
    },
    transitions: {
        cubic_back: 'cubic-bezier(.07,1.25,.84,1.16)',
        cubick_front: 'cubic-bezier(1,-0.18,.43,1)',
    }

}

const Layout = ({ children }) => {
    // states
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    // functions
    const handleNavOpen = () => {
        setIsNavOpen(!isNavOpen)
        window.navigator.vibrate(50);
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 50 ? setScrolled(true) : setScrolled(false)
        })

        window.removeEventListener('scroll', () => {
            window.pageYOffset > 50 ? setScrolled(true) : setScrolled(false);
        })
    }, [])


    return (
        <AppContext.Provider value={{ isNavOpen, setIsNavOpen, handleNavOpen, scrolled }}>
            <ThemeProvider theme={theme}>
                <ParallaxProvider>
                    <SideMenu />
                    <Nav />
                    {children}
                    <Footer />
                </ParallaxProvider>
            </ThemeProvider>
        </AppContext.Provider>
    )
}

export default Layout

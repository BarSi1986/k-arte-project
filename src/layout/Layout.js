import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import AppContext from '../context/AppContext'
import 'normalize.css'
import '../styles/styles.css'

import Footer from '../components/section_components/Footer'


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
        dark_red: '#6A0B0B',
    },
    transitions: {
        cubic_back: 'cubic-bezier(.07,1.25,.84,1.16)',
        cubick_front: 'cubic-bezier(1,-0.18,.43,1)',
    }

}

const Layout = ({ children }) => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <AppContext.Provider value={{ isNavOpen, setIsNavOpen }}>
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    {children}
                    <Footer />
                </React.Fragment>
            </ThemeProvider>
        </AppContext.Provider>
    )
}

export default Layout

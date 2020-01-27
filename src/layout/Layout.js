import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import '../styles/styles.css'


const theme = {
    fonts: {
        montserrat: "'Montserrat', sans-serif",
    },
    colors: {
        white: '#ffffff',
        gold: '#DFBA7F',
        grey: '#3F3F3F',
        lightgrey: '#4D4D4D',
    },
    transitions: {
        cubic_back: 'cubic-bezier(.07,1.25,.84,1.16)',
        cubick_front: 'cubic-bezier(.01,1.01,.42,1.01)'
    }

}

const Layout = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Layout

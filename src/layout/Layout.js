import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'normalize.css'
import '../styles/styles.css'


const theme = {
    montserrat: "'Montserrat', sans-serif"
}

const Layout = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Layout

import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
    margin: 0;
    color: #000;
    font-family: ${props => props.theme.fonts.playfair};
    font-size: 1.5em;
    letter-spacing: 2px;
    @media (max-width: 750px){
    font-size: 1.3em;
}
`

const H2_header = ({ text, className }) => {
    return (
        <Header className={className}>
            {text}
        </Header>
    )
}

export default H2_header

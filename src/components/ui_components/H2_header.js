import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
    margin: 0;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.playfair};
    font-size: 3em;
    letter-spacing: 5px;
`

const H2_header = ({ text, className }) => {
    return (
        <Header className={className}>
            {text}
        </Header>
    )
}

export default H2_header

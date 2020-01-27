import React from 'react'
import styled from 'styled-components'

const GoldenBtn = styled.button`
    border: none;
    background: ${props => props.theme.colors.gold};
    width: 200px;
    padding: 15px;
    font-family: ${props => props.theme.fonts.montserrat};
    margin: 25px 0;
    cursor: pointer;
`

const GoldenButton = ({ text }) => {
    return (
        <GoldenBtn>
            {text}
        </GoldenBtn>
    )
}

export default GoldenButton

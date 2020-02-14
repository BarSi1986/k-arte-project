import React from 'react'
import styled from 'styled-components'

const GoldenBtn = styled.button`
    border: none;
    background: ${props => props.theme.colors.gold};
    color: #fff;
    width: 200px;
    padding: 15px;
    font-family: ${props => props.theme.fonts.montserrat};
    margin: 25px 0;
    cursor: pointer;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: transparent;
        border: 1.5px solid ${props => props.theme.colors.gold};
        transition: .3s ${props => props.theme.transitions.cubic_front};
    }

    &:hover{
        &::after{
            width: calc(100% + 6px);
            height: calc(100% + 6px);
        }
    }
`

const GoldenButton = ({ text, className }) => {
    return (
        <GoldenBtn className={className}>
            {text}
        </GoldenBtn>
    )
}

export default GoldenButton

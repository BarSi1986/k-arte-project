import React from 'react'
import styled from 'styled-components'

import logo from '../../images/logo.png'

const FooterWrapper = styled.footer`
    width: 100%;
    height: 45vh;
    background: #111;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    overflow: hidden;
`

const FootElement = styled.div`
    height: 100%;
    margin: 10px;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.montserrat};
    padding: 20px;
    letter-spacing: 1px;
    text-align: center;
    position: relative;

    &:nth-last-of-type(2){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
            margin: 5px;
            font-size: 1.2em;
        }
    }
`

const FootLogo = styled.img`
    width: 100px;
    margin-bottom: 15px;
`

const Arte = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-55%);
    font-size: 28em;
    font-weight: 100;
    opacity: .05;
    color: ${props => props.theme.colors.grey};
    margin: 0;
    letter-spacing: 50px;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FootElement>
                <FootLogo src={logo} />
                <p>biuro.karte@gmail.com</p>
                <p>(+48) 662-817-231</p>
                <Arte>arte</Arte>
            </FootElement>
        </FooterWrapper>
    )
}

export default Footer

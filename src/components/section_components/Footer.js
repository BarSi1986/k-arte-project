import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'

import logo from '../../images/logo.png'

const FooterWrapper = styled.footer`
    width: 100%;
    height: 30vh;
    background: #111;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    overflow: hidden;

    @media (max-width: 750px){
        height: 45vh;
    }

    transition: 1s ${props => props.theme.transitions.cubic_front};
    &.blurred{
        transform: translateX(-35px);
        opacity: .3;
    }
    @media (max-width: 750px) {
        &.blurred{
        transform: translateY(-35px);
        opacity: .3;
    }}
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

    @media (max-width: 750px){
       letter-spacing: 0;
       font-size: 15em;
       opacity: .1;
    }
`

const Footer = () => {
    const { isNavOpen } = useContext(AppContext)
    return (
        <FooterWrapper className={isNavOpen && 'blurred'}>
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

import React from "react"
import styled from 'styled-components'

// images
import background from '../../images/bg.jpg'
// import logo from '../../images/logo.png'


const HomeWrapper = styled.section`
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;

    background: url(${background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`
const MixedBg = styled.div`
    position: absolute;
    background: ${props => props.theme.colors.grey};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply; 
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Header1 = styled.h1`
    position: absolute;
    font-family: ${props => props.theme.fonts.montserrat};
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 19%);
    color: ${props => props.theme.colors.white};
    font-size: 51vw;
    margin: 0;
   

    @media (max-width: 750px) {
        position: absolute;
        bottom: 50%;
        transform: translate(-50%, 50%);
        display: flex;
        flex-direction: column;
        /* justify-content: flex-start;
        align-items: center; */
        font-size: 60vw;
        padding: 20px;
        border: 8px solid white;
        span{
            height: 180px;
            transform: translateY(-50px);
        }
    }
`

// const Logo = styled.img`
//     display: none;
//     width: 100px;
//     margin-top: 45px;
//     @media (max-width: 750px) {
//         display: initial;
//     }

// `

const Hero = () => {
    return (
        <HomeWrapper>
            <MixedBg>
                {/* <Logo src={logo} /> */}
                <Header1><span>ar</span><span>te</span></Header1>
            </MixedBg>
        </HomeWrapper>
    )
}

export default Hero

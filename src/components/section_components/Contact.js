import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styled from 'styled-components'


// import ornament from '../../images/ornament1.svg'

import Header from '../ui_components/H2_header'
import Button from '../ui_components/GoldenButton'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const FormWrapper = styled.section`
    background: ${props => props.theme.colors.darkgrey};
    position: relative;


    transition: 1s ${props => props.theme.transitions.cubic_front};
    &.blurred{
        transform: translateX(-35px);
        opacity: .3;
    }
    @media (max-width: 750px) {
        &.blurred{
        transform: translateY(-35px);
        opacity: .3;
    }
    }
`

const StyledHeader = styled(Header)`
    color: ${props => props.theme.colors.gold};
    margin: 20px 0;
    z-index: 2;
    width: 100%;
    text-align: center;
    padding-top: 20px;
    @media (max-width: 750px){
        padding: 20px 0px;
        text-align: left;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
    @media (max-width: 750px){
        width: 100%;
        padding: 0 20px;
        align-items: flex-start;
    }
`

const InputWrapper = styled.div`
    display: flex;
    position: relative;
    @media (max-width: 750px){
        flex-direction: column;
        width: 100%;
    } 
`

const Input = styled.input`
    background: transparent;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.montserrat};
    font-weight: 100;
    padding: 10px 20px;
    outline-color: ${props => props.theme.colors.gold};
    border: 2px solid ${props => props.theme.colors.gold};
    width: 300px;
    margin: 10px 5px;
    @media (max-width: 750px){
        width: 100%;
        margin: 10px 0px;
    }
`

const TextArea = styled.textarea`
    background: transparent;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.montserrat};
    font-weight: 100;
    padding: 10px 20px;
    resize: none;
    outline-color: ${props => props.theme.colors.gold};
    border: 2px solid ${props => props.theme.colors.gold};
    width: 920px;
    height: 300px;
    z-index: 1;
    @media (max-width: 750px){
        width: 100%;
    }
`

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: .1;
    /* background-attachment: fixed; */
`

const Ornament = styled.div`
    width: 130px;
    margin: 20px 0;
    position: relative;
    bottom: 15px;
    left: 0;
    height: 4px;
    width: 50px;
    background: ${props => props.theme.colors.gold};
    @media (max-width: 750px) {
      margin: 0px 0 20px 0;
    }
`

const StyldImg = styled(Img)`
position: absolute !important;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
`

const Contact = () => {
    const data = useStaticQuery(graphql`
    query ContactImageQuery {
        file(relativePath: { eq: "contact_bg.jpg" }) {
            childImageSharp {
                fluid(quality: 100 maxWidth: 1440){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    const { isNavOpen } = useContext(AppContext)
    return (
        <FormWrapper className={isNavOpen && 'blurred'}>
            <Background>
                <StyldImg
                    fluid={data.file.childImageSharp.fluid}
                />
            </Background>
            <Form>
                <StyledHeader text='NAPISZ DO NAS' />
                <Ornament />
                <InputWrapper>
                    <Input type='text' placeholder="Twoje imię" />
                    <Input type='email' placeholder="Twój email" />
                    <Input type='text' placeholder="Tytuł wiadomości" />
                </InputWrapper>
                <TextArea placeholder='Twoja wiadomość' />
                <Button text="Prześlij" />
            </Form>
        </FormWrapper>
    )
}

export default Contact

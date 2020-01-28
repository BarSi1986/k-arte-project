import React from 'react'
import styled from 'styled-components'

import ornamentLeft from '../../images/ornament2_left.svg'
import ornamentRight from '../../images/ornament2_right.svg'

import Header from '../ui_components/H2_header'

import background from '../../images/contact_bg.jpg'

const FormWrapper = styled.section`
    background: ${props => props.theme.colors.darkgrey};
    position: relative;
`

const StyledHeader = styled(Header)`
    color: ${props => props.theme.colors.gold};
    margin: 20px 0;
    z-index: 2;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
`

const OrnamentLeft = styled.img`
    position: absolute;
    top: 15px;
    left: -110px;
    width: 110px;
`

const OrnamentRight = styled.img`
    position: absolute; 
    top: 15px;
    right: -110px;
    width: 110px;
`

const InputWrapper = styled.div`
    display: flex;
    position: relative;
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
`

const Submit = styled.input`
    background: transparent;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.montserrat};
    padding: 10px 20px;
    outline-color: ${props => props.theme.colors.gold};
    border: none;
    background:${props => props.theme.colors.gold};
    width: 300px;
    margin: 30px;
    font-size: 1em;
    color: #000;
    cursor: pointer;
    z-index: 1;
`

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    background: url(${background});
    background-size: cover;
    background-position: center;
    opacity: .1;
    /* background-attachment: fixed; */
`

const Contact = () => {
    return (
        <FormWrapper>
            <Background />
            <Form>
                <StyledHeader text='Napisz do nas' />
                <InputWrapper>
                    <OrnamentLeft src={ornamentLeft} />
                    <OrnamentRight src={ornamentRight} />

                    <Input type='text' placeholder="Twoje imię" />
                    <Input type='email' placeholder="Twój email" />
                    <Input type='text' placeholder="Tytuł wiadomości" />
                </InputWrapper>
                <TextArea placeholder='Twoja wiadomość' />
                <Submit type='submit' />
            </Form>
        </FormWrapper>
    )
}

export default Contact

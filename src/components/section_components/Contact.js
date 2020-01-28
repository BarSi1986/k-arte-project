import React from 'react'
import styled from 'styled-components'

import ornamentLeft from '../../images/ornament2_left.svg'
import ornamentRight from '../../images/ornament2_right.svg'

import Header from '../ui_components/H2_header'

const FormWrapper = styled.section`
    background: ${props => props.theme.colors.darkgrey};
`

const StyledHeader = styled(Header)`
    color: ${props => props.theme.colors.gold};
    margin: 20px 0;
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
`

const Submit = styled.input`
    background: transparent;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.montserrat};
    font-weight: 400;
    padding: 10px 20px;
    outline-color: ${props => props.theme.colors.gold};
    border: none;
    background:${props => props.theme.colors.gold};
    width: 300px;
    margin: 15px;
    font-size: 1.2em;
    color: ${props => props.theme.colors.darkgrey};
    cursor: pointer;
`

const Contact = () => {
    return (
        <FormWrapper>
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

import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../context/AppContext'

import Contact from '../components/section_components/Contact'

const StyledContactSection = styled(Contact)`
    transition: 1s ${props => props.theme.transitions.cubic_front};
    &.blurred{
        transform: translateX(35px);
        opacity: .3;
    }
    @media (max-width: 750px) {
        &.blurred{
        transform: translateY(-35px);
        opacity: .3;
    }
    }
`

const Kontakt = () => {

    const { isNavOpen } = useContext(AppContext)

    return (
        <React.Fragment>
            <StyledContactSection className={isNavOpen && 'blurred'} />
        </React.Fragment>
    )
}

export default Kontakt
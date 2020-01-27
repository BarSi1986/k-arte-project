import React from 'react'
import styled from 'styled-components'

import leftOrnament from '../../images/ornament2_left.svg'
import rightOrnament from '../../images/ornament2_right.svg'

import Header from '../ui_components/H2_header'



const GalleryWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.colors.lightgrey};
    position: relative;
`

const OrnamentImage = styled.img`
    position: absolute;
    width: 180px;
`

const GalleryInnerWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledHeader = styled(Header)`
    width: 100%;
    text-align: center;
    background: ${props => props.theme.colors.white};
    padding: 20px 0;
    color: #313131;
    font-family: ${props => props.theme.fonts.playfair};
`

const GalleryGrid = styled.div`
    
`

const Gallery = () => {
    return (
        <GalleryWrapper>

            <GalleryInnerWrapper>
                <StyledHeader text="See The Projects" />
                <GalleryGrid>

                </GalleryGrid>
            </GalleryInnerWrapper>


        </GalleryWrapper>
    )
}

export default Gallery

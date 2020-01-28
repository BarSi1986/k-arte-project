import React from 'react'
import styled from 'styled-components'

import ornament from '../../images/ornament3.svg'
import Header from '../ui_components/H2_header'

const GalleryWrapper = styled.section`
  overflow: hidden;
  height: 106vh;
`

const StyledHeader = styled(Header)`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.grey};   
  /* text-align: center; */
  width: 100%;
`

const GridWrapper = styled.div`
  display: grid;
  border: 3px solid ${props => props.theme.colors.gold};
  padding: 10px;
  height: 90vh;
  width: 85%;
  margin: auto;
  position: relative;

  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;

  grid-template-areas:
    "a a b b b e e e"
    "c c c d d e e e";
`

const GridItem = styled.div`
  background-size: cover;
  background-position: center;
  &:nth-of-type(1){
    background-image: url("https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
    grid-area: a;
  }
  &:nth-of-type(2) {
  background-image: url("https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80");
  grid-area: b;
}
  &:nth-of-type(3) {
  background-image: url("https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
  grid-area: c;
}
&:nth-of-type(4) {
  background-image: url("https://images.unsplash.com/photo-1544207240-8b1025eb7aeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
  grid-area: d;
}
&:nth-of-type(5) {
  background-image: url("https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-1.2.1&auto=format&fit=crop&w=609&q=80");
  grid-area: e;
}
`

const WordSkrojone = styled.h2`
  font-size: 10em;
  opacity: 0.08;
  position: absolute;
  margin: 0;
  top: 180px;
  left: -350px;
  transform: rotate(-90deg);
`

const WordNaMiare = styled.h2`
  font-size: 10em;
  opacity: 0.08;
  position: absolute;
  margin: 0;
  bottom: 200px;
  right: -350px;
  transform: rotate(90deg);
`
const HeaderWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 90px;

justify-content: flex-end;
position: relative;
width: 64%;
margin: auto;
z-index: 1;
`
const Ornament = styled.img`
    width: 120px;
    position: absolute;
    left: 170px;
    bottom: -20px;
    z-index: 1;
`




const Gallery = () => {
  return (
    <GalleryWrapper>
      <HeaderWrapper>
        <StyledHeader text='Realizacje' />
        <Ornament src={ornament} />
      </HeaderWrapper>
      <GridWrapper>

        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />

        <WordSkrojone>Skrojone</WordSkrojone>
        <WordNaMiare>Na miarę</WordNaMiare>
      </GridWrapper>
    </GalleryWrapper>

  )
}

export default Gallery

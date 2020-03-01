import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../context/AppContext'
import { graphql, useStaticQuery } from 'gatsby'

import ScrollContainer from "react-indiana-drag-scroll";

const PortfolioWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
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

const SectionParis = () => {

  const data = useStaticQuery(graphql`
    query ParisImagesQuery {
        image1: file(relativePath: {eq: "Paris (27).jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1300) {
                ...GatsbyImageSharpFluid
            }
          }
        },
        image2: file(relativePath: {eq: "Paris (8).jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid    
            }
          }
        },
        image3: file(relativePath: {eq: "Paris (17).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image4: file(relativePath: {eq: "Paris (1).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 500) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image5: file(relativePath: {eq: "Paris (22).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image6: file(relativePath: {eq: "Paris (6).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image7: file(relativePath: {eq: "Paris (24).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
          image8: file(relativePath: {eq: "Paris (26).jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          },
      }
    `)

  const { isNavOpen } = useContext(AppContext)
  return (
    <PortfolioWrapper className={isNavOpen && 'blurred'}>

    </PortfolioWrapper>
  )
}

export default SectionParis

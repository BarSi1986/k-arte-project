import React from 'react'
import styled from 'styled-components'

import Scandinavia from './SectionScandinavia'
import Paris from './SectionParis'


const ComponentWrapper = styled.section`

`

const PortfolioWrapper = () => {
    return (
        <ComponentWrapper>
            <Paris />
            <Scandinavia />
        </ComponentWrapper>
    )
}

export default PortfolioWrapper

import React from 'react'

import Layout from '../layout/Layout'
import MoreAboutMe from '../components/section_components/MoreAboutMe'
import About from '../components/section_components/About_2'


const about = () => {
    return (
        <Layout>
            <MoreAboutMe />
            <About />
        </Layout>
    )
}

export default about

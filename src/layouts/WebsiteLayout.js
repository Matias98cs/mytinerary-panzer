import React from 'react'
import Cities from '../components/Cities'
import Footer from '../components/Footer'
import UnderConstruction from '../components/UnderConstruction'

export default function WebsiteLayout(props) {
  return (
    <div>

        {props.children}
        {/* <UnderConstruction/> */}
        <Footer />
        
    </div>
  )
}

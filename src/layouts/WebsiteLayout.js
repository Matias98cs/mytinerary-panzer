import React from 'react'
import Footer from '../componets/Footer'
import UnderConstruction from '../componets/UnderConstruction'

export default function WebsiteLayout(props) {
  return (
    <div>

        {props.children}
        <UnderConstruction/>
        <Footer />

    </div>
  )
}

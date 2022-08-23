import React from 'react'
import Footer from '../components/Footer'

export default function WebsiteLayout(props) {
  return (
    <div>
        <h2>SOY EL HEADER</h2>
        {props.children}
        <Footer />
    </div>
  )
}

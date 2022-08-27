import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'

export default function CallToAction(props) {
  return (
    <LinkRouter to={props.linkto} > {props.btnText} </LinkRouter>
  )
}

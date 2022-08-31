import React from 'react'
import CityCard from '../components/CityCard'
import Input from '../components/Input'
import '../style/Cities.css'

export default function Cities() {

  return (
    <div className="Cities-container">
      <div>
        <Input />
      </div>
      <CityCard />
    </div>
  )
}

import React from 'react'
import InputsNewCity from '../components/InputsNewCity'
import '../style/NewCity.css'


export default function NewCity() {
    return (
    <div className='NewCity-container'>
        <div className='newcity-title'>
            <h2>New City ✈</h2>
        </div>
        <InputsNewCity />
    </div>
    )
}

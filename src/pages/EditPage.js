import React from 'react'
import EditForm from '../components/editCity/EditForm'
import '../style/EditPage.css'

export default function EditPage() {
  return (
    <div className='EditPage-container'>
      <div className='EditPage-title'>
        <h2>CITY UPDATE 🖋</h2>
      </div>
      <EditForm />
    </div>
  )
}

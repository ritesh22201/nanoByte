import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

function Interview() {
  return (
    <div className='flex relative' style={{ height: '89vh' }}>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Interview
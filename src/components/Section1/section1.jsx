import React from 'react'
import Navbar from './navbar'
import PageContent from './pagecontent'
const section1 = (props) => {

  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <PageContent users={props.users}/>
        
    </div>
  )
}

export default section1

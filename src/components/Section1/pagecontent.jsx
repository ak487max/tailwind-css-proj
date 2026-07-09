import React from 'react'
import LeftContent from './leftcontent'
import RightContent from './rightcontent'

const pagecontent = (props) => {
  return (
    <div className='py-3 flex items-center justify-between gap-10 h-[90vh] px-18'>
    <LeftContent/>
    <RightContent users={props.users}/>
    </div>
  )
}

export default pagecontent

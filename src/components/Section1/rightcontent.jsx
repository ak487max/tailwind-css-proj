import React from 'react'
import RightCard from './RightCard'
const rightcontent = (props) => {
    console.log(props);

  return (
    <div className='h-full flex overflow-x-auto rounded-4xl flex-nowrap gap-10 p-6 w-3/4'>
     {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
     })}
    </div>
  )
}

export default rightcontent
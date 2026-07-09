import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between '>
        <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id}</h2>
        <div>
            <p className='text-l leading-tight text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae, non distinctio maxime et impedit dignissimos reiciendis autem, perferendis eveniet quisquam commodi eius labore consequuntur consectetur sit culpa, maiores ut.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent

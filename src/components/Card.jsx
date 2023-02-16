import React from 'react'

const Card = ({src,index}) => {
  return (
    <div key={index}>
        <img className='w-56 h-80 object-cover object-center mx-auto' src={src.large} alt="" />
    </div>
  )
}

export default Card
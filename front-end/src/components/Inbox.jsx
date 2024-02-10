import React from 'react'

export const Inbox = ({label}) => {
  return (
    <div className=''>
    <div className='bg-hotred w-24 mt-4 ml-4 flex cursor-pointer justify-center rounded-md mb-4 h-15 text-white'>
        {label}
        </div>
    </div>
  )
}


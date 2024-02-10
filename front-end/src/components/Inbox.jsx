import React from 'react'
export const Inbox =({label}) => {
  return (
  <>
    <div className='flex justify-center'>

    <div className='bg-hotred text-white w-64 h-9 mt-2  rounded-lg'>
        {label}
    </div>
    </div>
    </>
  )
}


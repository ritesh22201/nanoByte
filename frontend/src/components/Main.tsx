import React from 'react'

const Main = () => {
  return (
    <div className='bg-gray-700 flex items-end w-3/4 relative'>
        <div className='absolute w-full bottom-8 text-slate-400'>
        <input className='w-4/5 bg-gray-700 rounded outline focus:border-blue-400 px-4 py-5' type="text" placeholder='Enter your prompt' />
        </div>
    </div>
  )
}

export default Main;
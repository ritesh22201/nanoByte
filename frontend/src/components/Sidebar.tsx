import React from 'react'
// import { FaPlus } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';

const Sidebar = () => {
    return (
        <div className='flex justify-center w-1/4'>
            <div className='h-full flex justify-center top-0 left-0 shadow-md w-full bg-gray-800'>
                <div>
                    <button className='my-10 outline rounded py-2 px-8 text-slate-400 flex items-center gap-1'><BsPlus /> New interview</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
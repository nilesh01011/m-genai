import React from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'

function Aside({ Menu }) {
    return (
        <aside className='h-screen'>
            {/* logo */}
            <div className='h-[64px] flex items-center justify-center p-[0_8px] mb-[5vh] mt-[20px]'>
                <Link to="/">
                    <img alt="logo" src="./logo.png" className='w-full h-[65px] object-contain' />
                    {/* <span className='text-[28px]'>M SMART</span> */}
                </Link>
            </div>

            {/* menu items */}
            <ul className='w-full h-full pl-[32px] pr-[32px] mb-[20px]'>
                {Menu?.map((ele, index) => (
                    <MenuItems key={index} ele={ele} />
                ))}
            </ul>
        </aside>
    )
}

export default Aside
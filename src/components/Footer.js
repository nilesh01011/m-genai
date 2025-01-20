import React from 'react'

function Footer() {
  return (
    <div className='w-full flex items-center justify-center gap-[5px] footer'>
      {/* footer logo */}
      <span className='text-[11px]'>Powered by </span>
      <span className='h-[12px]'>
        <img src='/mai-darkmode.png' alt='Logo' className='w-[100%] h-[100%] object-contain' />
      </span>
    </div>
  )
}

export default Footer
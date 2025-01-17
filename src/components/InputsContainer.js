import React from 'react'

function InputsContainer() {
    return (
        <div className='max-w-[741px] h-full mt-[16px] bg-[#2f2f2f] rounded-[20px] pr-[20px] pl-[20px] pb-[15px] w-[660px] min-h-[125px] relative flex gap-[5px]'>
            {/* file icons */}
            <div className='h-[125px] flex items-end'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
                    <path d="M1.29224 11V6C1.29224 4.67392 1.81787 3.40215 2.75349 2.46447C3.68912 1.52678 4.9581 1 6.28128 1C7.60446 1 8.87344 1.52678 9.80907 2.46447C10.7447 3.40215 11.2703 4.67392 11.2703 6V12.6667C11.2703 13.5507 10.9199 14.3986 10.2962 15.0237C9.6724 15.6488 8.82641 16 7.94429 16C7.06218 16 6.21619 15.6488 5.59244 15.0237C4.96868 14.3986 4.61827 13.5507 4.61827 12.6667V6C4.61827 5.55797 4.79348 5.13405 5.10535 4.82149C5.41723 4.50893 5.84022 4.33333 6.28128 4.33333C6.72234 4.33333 7.14533 4.50893 7.45721 4.82149C7.76908 5.13405 7.94429 5.55797 7.94429 6V12.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            {/* inputs */}
            <div className='w-full h-[125px] flex items-start pt-[8px]'>
                <input type='text' className='pr-[39px] p-[7.5px] border-none bg-transparent w-full' placeholder='Hello' />
            </div>
            {/* arrow icons */}
            <div className='h-[125px] flex items-end'>
                <span className='w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M14.2864 8.14041L10.2162 4.07019M14.2864 8.14041L10.2162 12.2106M14.2864 8.14041L7.16349 8.14041M3.43246 8.14041L5.12838 8.14041" stroke="#231F20" stroke-width="0.938265" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default InputsContainer
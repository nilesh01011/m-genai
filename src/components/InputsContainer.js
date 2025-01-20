import React from 'react'
import { RxCross1 } from 'react-icons/rx'

function InputsContainer({ inputFields, setInputFields }) {
    return (
        <div className='max-w-[741px] h-full mt-[16px] bg-[#2f2f2f] rounded-[20px] pr-[20px] pl-[20px] pb-[15px] w-[660px] min-h-[125px] relative flex gap-[5px]'>
            {/* inputs */}
            <div className='w-full h-[125px] flex items-start pt-[8px]'>
                <input type='text' value={inputFields && inputFields} className='pr-[39px] p-[7.5px] border-none bg-transparent w-full text-[14px]' placeholder='Hello' />

                {
                    inputFields &&
                    <span onClick={() => setInputFields("")} className='absolute right-[30px] top-[20px] cursor-pointer'>
                        <RxCross1 />
                    </span>
                }
            </div>
            {/* arrow icons */}
            <div className='h-[125px] flex items-end'>
                <span className='w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M14.2864 8.14041L10.2162 4.07019M14.2864 8.14041L10.2162 12.2106M14.2864 8.14041L7.16349 8.14041M3.43246 8.14041L5.12838 8.14041" stroke="#231F20" strokeWidth="0.938265" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default InputsContainer
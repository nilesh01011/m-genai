import React from 'react'
import { myLearning } from '../data'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'
import { LuSunMoon } from 'react-icons/lu'

function MyLearning() {
    return (
        <div className='w-full flex'>
            {/* aside */}
            <Aside Menu={myLearning} />
            <div className='w-full pl-[40px] pt-[40px]'>
                {/* headers */}
                <div className='w-full flex items-center justify-between mb-[20px] pr-[40px]'>
                    {/* left side */}
                    <div>
                        <h1 className="text-[24px] text-center">Learning Center</h1>
                    </div>
                    {/* right side */}
                    <div className='flex items-center gap-[30px]'>
                        {/* toggle buttons */}
                        <span className='border-[1px] border-[#2f2f2f] flex items-center justify-center p-[3px] rounded-[10px] w-[42px] h-[29.4px]'>
                            <LuSunMoon />
                        </span>
                        {/* User name */}
                        <div className='flex items-center gap-[5px]'>
                            {/* name */}
                            <span>NAMBIAR PARAMESWARAN</span>
                            <span className='w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#e31837]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                    <path d="M5.52884 0.714294C4.98065 0.714294 4.44477 0.877208 3.98897 1.18243C3.53317 1.48766 3.17791 1.92149 2.96813 2.42906C2.75835 2.93664 2.70346 3.49515 2.8104 4.03399C2.91735 4.57283 3.18133 5.06778 3.56896 5.45626C3.95658 5.84474 4.45045 6.10929 4.98811 6.21648C5.52576 6.32366 6.08306 6.26865 6.58952 6.0584C7.09598 5.84816 7.52886 5.49213 7.83342 5.03532C8.13797 4.57852 8.30053 4.04146 8.30053 3.49207C8.30053 2.75536 8.00851 2.04882 7.48872 1.52789C6.96893 1.00695 6.26394 0.714294 5.52884 0.714294ZM5.52884 5.15874C5.19992 5.15874 4.8784 5.06099 4.60492 4.87785C4.33144 4.69472 4.11828 4.43442 3.99241 4.12988C3.86654 3.82533 3.83361 3.49022 3.89778 3.16692C3.96195 2.84362 4.12033 2.54665 4.35291 2.31356C4.58549 2.08047 4.88181 1.92174 5.2044 1.85743C5.52699 1.79312 5.86137 1.82613 6.16525 1.95227C6.46912 2.07842 6.72885 2.29204 6.91158 2.56612C7.09432 2.8402 7.19185 3.16244 7.19185 3.49207C7.19185 3.9341 7.01664 4.35802 6.70477 4.67058C6.39289 4.98314 5.9699 5.15874 5.52884 5.15874ZM10.5179 11.2698V10.7143C10.5179 9.6829 10.1091 8.69374 9.38135 7.96443C8.65364 7.23513 7.66665 6.82541 6.63751 6.82541H4.42016C3.39102 6.82541 2.40404 7.23513 1.67633 7.96443C0.948618 8.69374 0.539795 9.6829 0.539795 10.7143V11.2698H1.64847V10.7143C1.64847 9.97758 1.94049 9.27104 2.46028 8.75011C2.98007 8.22917 3.68506 7.93652 4.42016 7.93652H6.63751C7.37261 7.93652 8.0776 8.22917 8.5974 8.75011C9.11719 9.27104 9.40921 9.97758 9.40921 10.7143V11.2698H10.5179Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[40px]'>

                    <div className='w-full pt-[40px]'>
                        <h2 className="text-[18px] text-center">Stats</h2>

                        {/* dummy box */}
                        <div className="h-[210px] bg-[#2f2f2f] my-[30px] rounded-[20px]"></div>
                    </div>

                    {/* right sides */}
                    <div className='min-w-[230px] pr-[40px] flex flex-col justify-between pb-[170px]' style={{ height: "calc(100vh - 46px)" }}>
                        <p className='w-full mb-[10px] tags rounded-[10px] min-h-[100px] text-[12px] flex p-[15px]'>SCORE</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyLearning
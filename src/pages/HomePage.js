import React from 'react'
import InputsContainer from '../components/InputsContainer'
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function HomePage() {

  const tags = [
    {
      name: "Teach me SOP",
    },
    {
      name: "My Roles and Responsibility",
    },
    {
      name: "Take a Quiz",
    },
  ];

  const tags_2 = [
    {
      name: "SOP Repository",
      link: "/sop-repository",
    },
    {
      name: "My Learning",
      link: "/my-learning",
    },
    {
      name: "Video Library",
      link: "/",
    },
    {
      name: "References",
      link: "/references",
    },
  ]

  return (
    <>
      <Header />
      <div className='homePage pl-[40px] pr-[40px] w-full flex items-center justify-center flex-col'>
        {/* descriptions */}
        <p className='text-[14px]'>
          Welcome to M-Smart , Next Gen Digital SOP Manual
        </p>
        <h6 className='text-[14px] font-bold mb-[16px]'>Data remains strictly in Mahindra's secure cloud</h6>

        {/* title */}
        <h1 className='text-[23px]'>What can I help you with?</h1>
        {/* inputs container */}
        <InputsContainer />

        {/* tags */}
        <div className="flex items-center gap-[10px] m-[16px]">
          {
            tags.map((tag, i) => (
              <p key={i} className="p-[3px_9px] flex items-center gap-[5px] rounded-[10px] border-[1px] border-[#a7a7a7]">
                <span className="text-[12px]">{tag.name}</span>
              </p>
            ))
          }
        </div>

        <div>
          {/* title */}
          <h1>M Smart Tab</h1>
          {/* tabs */}
          <div className="flex items-center gap-[16px] m-[16px] ml-0">
            {
              tags_2.map((tag, i) => (
                <Link to={tag.link} key={i} className="tags w-[210px] h-[100px] p-[15px] flex gap-[5px] rounded-[10px] cursor-pointer relative">
                  <span className='text-[12px]'>{tag.name}</span>
                  <span className='absolute right-[15px] bottom-[15px] w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path d="M14.2864 8.14041L10.2162 4.07019M14.2864 8.14041L10.2162 12.2106M14.2864 8.14041L7.16349 8.14041M3.43246 8.14041L5.12838 8.14041" stroke="#231F20" stroke-width="0.938265" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
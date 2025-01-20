import React from 'react'
import { Link } from 'react-router-dom';

function SubMenuItems({ ele }) {
    const pathname = window.location.pathname;

    return (
        <Link to={ele.link} className={`text-[12px] py-[6px] px-[12px] pl-[24px] font-[400] ${pathname === ele.link && "font-[700] text-white"} capitalize`} >{ele.name}</Link>
    )
}

export default SubMenuItems
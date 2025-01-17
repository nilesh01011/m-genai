import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SubMenuItems({ ele }) {
    const pathname = window.location.pathname;

    const router = useNavigate();

    const handleRoutes = (ele) => {
        router(ele);
    };

    return (
        <Link to={ele.link} className={`text-[14px] py-[6px] px-[12px] pl-[16px] font-[400] ${pathname === ele.link && "font-[700] text-white"} capitalize`} >{ele.name}</Link>
    )
}

export default SubMenuItems
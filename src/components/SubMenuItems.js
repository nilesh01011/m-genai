import React from 'react'
import { Link } from 'react-router-dom';

function SubMenuItems({ ele, getTitleName, setTitleName, setSubTitleName }) {
    const pathname = window.location.pathname;

    const handleTitleNameChange = () => {
        try {
            if (getTitleName) {
                setTitleName(getTitleName);
                setSubTitleName(ele.name);
            }
        } catch (error) {
            console.log("error:", error)
        }
    }

    return (
        <Link to={ele.link} onClick={() => handleTitleNameChange()} className={`text-[12px] py-[6px] px-[12px] pl-[24px] font-[400] ${pathname === ele.link && "font-[700] text-white"} capitalize`} >{ele.name}</Link>
    )
}

export default SubMenuItems
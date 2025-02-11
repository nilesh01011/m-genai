import React, { useEffect, useState } from "react";
import SubMenuItems from "./SubMenuItems";
import { useNavigate } from "react-router-dom";

function MenuItems({ ele, setTitleName, setSubTitleName }) {
    const [expand, setExpand] = useState(false);

    const pathname = window.location.pathname;

    const router = useNavigate();

    useEffect(() => {
        // Check if ele.items is defined and is an array
        const isChildActive = Array.isArray(ele.items) && ele.items.some(item => pathname === item.link);
        if (pathname === ele.link || isChildActive) {
            setExpand(true);
        } else {
            setExpand(false); // collapse if the pathname doesn't match
        }
    }, [pathname, ele.link, ele.items]);

    const handleExpanded = (link) => {
        setExpand(!expand);

        if (link) router(link);
    };

    return (
        <li className="text-white cursor-pointer">
            {/* ${expand && ele.isFolder && "bg-red-500"} ${pathname === ele.link && "bg-green-400"} */}
            <div
                className={`flex items-center gap-[12px] p-[12px] justify-between`}
                onClick={() => handleExpanded(ele.link)}
            >
                <p className="flex items-center text-[14px] gap-[4px]">
                    <small
                    >
                        {ele.icon}
                    </small>

                    <span
                    >
                        {ele.name}
                    </span>
                </p>
                {/* arrow icons */}
                {ele.isFolder && (
                    <span
                        style={{
                            transform: !expand && "rotate(180deg)",
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path
                                d="M2.25 7.875L6 4.125L9.75 7.875"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                )}
            </div>
            {expand && ele.isFolder && (
                <ul className="sub-menu box-border flex flex-col pb-[5px]">
                    {ele.items.map((el, index) => (
                        <SubMenuItems key={index} ele={el} getTitleName={ele.name} setTitleName={setTitleName} setSubTitleName={setSubTitleName} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default MenuItems;
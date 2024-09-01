"use client";
import React, { useEffect, useState } from 'react';

const DarkMode = () => {
    const [dark, setDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem("dark") === "true";
        }
        return false; // قيمة افتراضية إذا كان الكود ينفذ على الخادم
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.classList.toggle("dark", dark);
            localStorage.setItem("dark", dark);
        }
    }, [dark]);

    const changeMode = () => {
        setDark(!dark);
    };

    return (
        <div 
            className='cursor-pointer select-none relative rounded-full p-[2px] flex justify-between items-center text-center border-2' 
            onClick={() => changeMode()}
        >
            <div className='text-[18px]'>
                🌙🌚
            </div>
            <div 
                className={`w-[25px] aspect-square absolute bg-[var(--primary)] rounded-full transition-all duration-300 ${dark ? 'right-[2px]' : 'left-[2px]'}`}
            />
        </div>
    );
};

export default DarkMode;

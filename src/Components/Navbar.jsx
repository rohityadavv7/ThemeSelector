import React, { useEffect } from 'react'
import { useState } from 'react';

function Navbar() {

    const[theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"cupcake");

    useEffect(() => {
        setTheme(theme);
        const themeSelector = theme;
        document.querySelector("html").setAttribute("data-theme", themeSelector);
    },[theme])

    const handleToggle = (e)=> {
        if(e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("cupcake")
        }
    }
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end p pr-10">
            <button className="btn btn-ghost btn-circle">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input class="sr-only peer" value="" type="checkbox" onChange={handleToggle}/>
                    <div
                        class="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                    ></div>
                </label>

            </button>
        </div>
    </div>
  )
}

export default Navbar
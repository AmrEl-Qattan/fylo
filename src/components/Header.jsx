import React, { useEffect, useRef } from 'react'

export default function Header() {
    const headerRef = useRef();
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                headerRef.current.style.background = "#0c1524"
                headerRef.current.style.padding = "20px 0"
            }
            else{
                headerRef.current.style.background = "transparent"
                headerRef.current.style.padding = "60px 0"
            }      
        })
    },[])
  return (
   <header ref={headerRef} className='pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200'>
 <div className="container  flex items-center justify-between gap-[30px] flex-col sm:flex-row">
 <a href="/">
    <img src="../src/assets/images/logo.svg" alt="" />
    </a>
    <nav>
        <ul className='flex items-center gap-[50px]'>
            <li>
                <a className='text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200' href="/features">features</a>
            </li>
            <li>
                <a className='text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200' href="/team">team</a>
            </li>
            <li>
                <a className='text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200' href="/signin">signin</a>
            </li>
        </ul>
    </nav>
 </div>
   </header>
  )
}

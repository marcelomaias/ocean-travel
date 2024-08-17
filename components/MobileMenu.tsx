'use client'

import { mainNav } from "@/data";
import Link from "next/link";
import { useState } from "react";


const MobileMenu = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div onClick={() => setOpen(prev => !prev)}>
        <div className={`hamburger hamburger--slider ${open && 'active'}`}>
          <div className="hamburger-box">
            <div className="hamburger-inner bg-gray-200 before:bg-inherit after:bg-inherit"></div>
          </div>
        </div>
      </div>
      {open && (
        <nav className="absolute bg-blue-950/95 text-white left-0 top-[60px] w-full h-[calc(100vh-60px)] flex flex-col justify-center items-center gap-6 text-xl z-20">

          {mainNav.map(link => (
            <Link href={link.path} key={link.path}>{link.label}</Link>
          ))}
        </nav>

      )}
    </>
  );
}

export default MobileMenu;
'use client'

import { useRef } from 'react';

import { mainNav } from "@/data";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger);


const Header = () => {

  const container = useRef<HTMLDivElement>(null);

  const trigger = {
    // markers: true,
    trigger: '.headerArea',
    start: '100',
    end: '400',
    scrub: true,
  }

  useGSAP(
    () => {
      // gsap code here...
      gsap.to('.headerArea', {
        backgroundColor: '#ffffff',
        color: '#000000',
        fill: '#000000',
        duration: 1.0,
        boxShadow: '0 1px 10px 1px rgba(0,0,0,.5)',
        scrollTrigger: trigger,
      }) // <-- automatically reverted
      gsap.to('.hamburger-inner', {
        backgroundColor: '#000000',
        scrollTrigger: trigger,
      }) // <-- automatically reverted
    },
    { scope: container }
  ); // <-- scope for selector text (optional)


  return (
    <div id='mainCtx' ref={container}>

      <section id="header" className="headerArea w-full fixed top-0 z-20 text-gray-200 border-b-[1px] h-[60px] border-gray-200 px-2 fill-white">
        <div className='container h-full'>
          <header className='header flex gap-4 justify-between items-center h-full'>
            <div className='flex gap-2 items-center uppercase text-sm font-semibold'>
              <svg className='fill-inherit' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path d='M17.133 17.202l1.596.923c-1.508 2.055-3.606 3.548-5.729 3.875v-14.103c0-2.39 2-2.619 2-4.897 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 2.297 2 2.487 2 4.897v14.103c-2.123-.327-4.221-1.799-5.729-3.854l1.596-.944-4.867-2.811v5.621l1.5-.908c2.178 3.077 5.203 4.896 8.5 4.896s6.282-1.798 8.458-4.875l1.542.887v-5.621l-4.867 2.811zm-6.133-14.202c0-.551.449-1 1-1s1 .449 1 1-.449 1-1 1-1-.449-1-1z' />
              </svg>
              <div>
                Ocean Travel
              </div>
            </div>
            <div className='hidden md:flex items-center gap-4 uppercase text-sm'>
              {
                mainNav.map(item => (
                  <Link href={item.path} key={item.path}>{item.label}</Link>
                ))
              }
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </header>
        </div>
      </section></div>
  );
}

export default Header;
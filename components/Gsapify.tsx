'use client'

import { useRef } from 'react';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger);

gsap.config({
  nullTargetWarn: false
});

const Gsapify = ({ children }: Readonly<{ children: React.ReactNode; }>) => {

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // gsap code here...
      gsap.from('.place-card', {
        x: 150,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.place-card',
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        },
      })
      gsap.from('.stamp', {
        x: -120,
        rotate: -360,
        scrollTrigger: {
          trigger: '.stamp',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        },
      })

      // <-- automatically reverted
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <div ref={container}>
      {children}
    </div>
  );
}

export default Gsapify;
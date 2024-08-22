'use client'

import { location } from "@/types";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";

type HeroProps = {
  places: location[]
}

const Hero = ({ places }: HeroProps) => {

  const heroPlaces = places.filter((location: location) => location.acf.is_hero === true)


  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      pagination={{ clickable: true }}
    >
      <div>
        {heroPlaces.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full slide bg-black">
              <Image
                src={slide._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url}
                fill
                alt={slide._embedded['wp:featuredmedia']['0'].alt_text}
                style={{ objectFit: 'cover' }}
                sizes='
                    (max-width: 500px) 400px,
                    (max-width: 900px) 800px,
                    1920px'
                priority
                className="opacity-50"
              />
              <div className="relative z-10 text-white h-full flex flex-col justify-center container">
                <h1 className={`mt-0`}>{slide.title.rendered}</h1>
                <p className="max-w-[540px] mt-0">{slide.acf.description}</p>
                <Link className="px-6 py-3 ring-1 ring-white block w-max uppercase text-sm tracking-widest mt-6" href={slide.slug}>Explore it now!</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}

export default Hero;
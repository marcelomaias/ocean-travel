import { roboto_slab } from "@/app/layout";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-full">
      <Image
        src="/ocean1.jpg"
        fill
        alt='Cover'
        style={{ objectFit: 'cover' }}
        sizes='
                (max-width: 500px) 400px,
                (max-width: 900px) 800px,
                1920px'
        priority
      />
      <div className="relative z-10 text-white h-full flex flex-col justify-center container">
        <h1 className={`${roboto_slab.className} mt-0`}>Lorem ipsum dolor sit.</h1>
        <p className="max-w-[590px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatem minus ratione eveniet dignissimos unde similique. Illum praesentium doloribus officia impedit, accusantium, beatae rem nobis veniam eos similique quae iusto.</p>
      </div>
    </section>
  );
}

export default Hero;
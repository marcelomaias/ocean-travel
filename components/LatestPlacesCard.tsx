import Link from "next/link";
import { location } from "@/types";
import Image from "next/image";

import { MdArrowCircleRight } from "react-icons/md";
import { roboto_slab } from "@/app/layout";

type placeProps = {
  place: location
}

const LatestPlaceCard = ({ place }: placeProps) => {
  return (
    <Link href={place.slug} className='w-full aspect-[16/9] sm:first-of-type:col-span-2 sm:first-of-type:aspect-[16/5] bg-slate-400 relative flex text-white items-end rounded-xl overflow-hidden p-8'>
      <Image
        className='object-cover scale-1 hover:scale-[1.2] transition-all'
        src={place._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url}
        fill
        alt={place._embedded['wp:featuredmedia']['0'].alt_text}
        sizes='
      (max-width: 500px) 500px,
      (max-width: 900px) 900px,
      800px'
      />
      <div className="z-10 relative">
        <h3 className={`text-lg md:text-4xl font-normal ${roboto_slab.className} [text-shadow:_2px_1px_3px_rgb(0_0_0_/_70%)]`}>{place.title.rendered}</h3>
        <p className="[text-shadow:_2px_1px_3px_rgb(0_0_0_/_70%)]">{place.acf.description}</p>
        <span className="flex gap-2 items-center mt-2 uppercase tracking-wider text-sm [text-shadow:_2px_1px_3px_rgb(0_0_0_/_70%)]">Read More <MdArrowCircleRight size={28} className="[text-shadow:_2px_1px_3px_rgb(0_0_0_/_70%)]" /></span>
      </div>

    </Link>
  );
}

export default LatestPlaceCard;
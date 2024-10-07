import Link from "next/link";
import { location } from "@/types";
import Image from "next/image";

import { IoLocationSharp } from "react-icons/io5";

type placeProps = {
  place: location
  type?: string
}

const PlaceCard = ({ place }: placeProps) => {


  return (
    <Link href={`/places/${place.slug}`} className='place-card w-full aspect-[4/6] bg-slate-400 relative flex justify-center text-center text-white items-end rounded-xl overflow-hidden pb-8'>
      <Image
        className='object-cover scale-1 hover:scale-[1.2] transition-all'
        src={place._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url}
        fill
        alt={place._embedded['wp:featuredmedia']['0'].alt_text}
        sizes='
      (max-width: 500px) 300px,
      (max-width: 900px) 500px,
      500px'
      />
      <div className="z-10 relative">
        <h3 className="text-lg md:text-2xl font-light [text-shadow:_2px_1px_3px_rgb(0_0_0_/_70%)]">{place.title.rendered}</h3>
        <h4 className="flex justify-center items-center mt-2 text-sm md:text-lg font-light [text-shadow:_2px_1px_3px_rgb(0_0_0_/_70%)]">{<IoLocationSharp className="drop-shadow-lg" />} {place.acf.location}</h4>
      </div>

    </Link>
  );
}

export default PlaceCard;
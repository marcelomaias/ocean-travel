import { FaMapLocationDot, FaSitemap } from "react-icons/fa6";
import SectionB from "@/components/SectionB";
import { getPlaces } from "@/actions";
import Image from "next/image";
import BackLink from "@/components/BackLink";
import PlacesList from "@/components/PlacesList";

export default async function PlacesPage() {

  const locations = await getPlaces()

  return (
    <>
      <section className="relative h-1/2 bg-black">
        <Image
          src="/map2.jpg"
          fill
          alt="Alt text"
          style={{ objectFit: 'cover' }}
          sizes='
                (max-width: 500px) 400px,
                (max-width: 900px) 800px,
                1920px'
          priority
          className="opacity-50"
        />
        <div className="relative z-10 text-white h-full flex flex-col justify-end container pb-8">
          <BackLink />
          <h1 className={`-mb-4 mt-0`}>Places</h1>
          <p className="max-w-[450px]">Explore the world&apos;s most beautiful places.</p>
        </div>
      </section>

      <PlacesList places={locations} type="placesList" />

      <SectionB />

      <div className="container mx-auto mb-20 mt-20 px-2 flex justify-between flex-col sm:flex-row gap-20">
        <div className="flex items-center gap-8">
          <FaMapLocationDot size="4em" className="flex-shrink-0" color="#333333" />
          <div>
            <h4 className="font-semibold text-2xl">Cras suscipit enim</h4>
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim enim, quis convallis risus scelerisque nec. Nulla facilisi. Maecenas eget libero tempus.</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <FaSitemap size="4em" className="flex-shrink-0" color="#333333" />
          <div>
            <h4 className="font-semibold text-2xl">Volutpat lacus scelerisque</h4>
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim enim, quis convallis risus scelerisque nec. Nulla facilisi. Maecenas eget libero tempus.</p>
          </div>
        </div>
      </div>

    </>
  );
}

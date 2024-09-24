import HeadingA from "@/components/HeadingA";
import Hero from "@/components/Hero";
import { FaMapLocationDot, FaSitemap } from "react-icons/fa6";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import LatestPlaces from "@/components/LatestPlaces";
import { location } from "@/types";
import { getPlaces } from "@/actions";
import PlacesList from "@/components/PlacesList";

export default async function Home() {

  const locations = await getPlaces()

  const popularLocations = locations.filter((location: location) => location.acf.is_popular === true)

  return (
    <>
      <Hero places={locations} />
      <HeadingA title="Popular destinations" subtitle="Where to go" />
      <PlacesList places={popularLocations} limit={4} />

      <div className="container mx-auto mb-8 mt-20 px-2 flex justify-between flex-col sm:flex-row gap-20">
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
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim enim, quis convallis risus scelerisque nec. Nulla facilisi. Maecenas eget libero tempus</p>
          </div>
        </div>
      </div>

      <SectionA />

      <HeadingA title="Latest destinations" subtitle="Where to go" />

      <LatestPlaces places={locations} limit={3} />

      <SectionB />

      <div className="container mx-auto mb-20 mt-20 px-2 flex justify-between flex-col sm:flex-row gap-20">
        <div className="flex items-center gap-8">
          <FaMapLocationDot size="4em" className="flex-shrink-0" color="#333333" />
          <div>
            <h4 className="font-semibold text-2xl">Cras suscipit enim</h4>
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim enim, quis convallis risus scelerisque nec. Nulla facilisi. Maecenas eget libero tempus</p>
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

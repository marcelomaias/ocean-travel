import { location } from "@/types";
import LatestPlaceCard from "./LatestPlacesCard";
import Image from "next/image";
import Gsapify from "./Gsapify";

type placesProps = {
  limit?: number
  places: location[]
}

const LatestPlaces = ({ limit, places }: placesProps) => {

  const sortedLocations: location[] = [...places].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // SORT POSTS
  const limitedPosts = limit ? sortedLocations.slice(0, limit) : sortedLocations // LIMIT POSTS

  return (
    <Gsapify>
      <section className="container grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between latest-places relative">
        <Image src='/stamp.svg' width={230} height={230} className="stamp absolute -top-64 right-0" alt="Stamp image." />
        {
          limitedPosts.map(place => (
            <LatestPlaceCard key={place.slug} place={place} />
          ))
        }
      </section>
    </Gsapify>
  );
}

export default LatestPlaces;
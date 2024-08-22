import { location } from "@/types";
import PlaceCard from "./PlaceCard";
import Gsapify from "./Gsapify";


type placesProps = {
  limit?: number
  places: location[]
}

const Places = ({ limit, places }: placesProps) => {

  const sortedLocations: location[] = [...places].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // SORT POSTS
  const limitedPosts = limit ? sortedLocations.slice(0, limit) : sortedLocations // LIMIT POSTS

  return (
    <Gsapify>
      <section className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between overflow-hidden">
        {
          limitedPosts.map(place => (
            <PlaceCard key={place.slug} place={place} />
          ))
        }
      </section>
    </Gsapify>
  );
}

export default Places;
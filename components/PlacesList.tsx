'use client'

import { location } from "@/types";
import PlaceCard from "./PlaceCard";
import Gsapify from "./Gsapify";
import { useState } from "react";
import { slugify } from "@/utils";


type placesProps = {
  limit?: number
  places: location[]
  type?: string
}

const PlacesList = ({ limit, places, type }: placesProps) => {

  const sortedLocations: location[] = [...places].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // SORT POSTS

  const limitedPosts = limit ? sortedLocations.slice(0, limit) : sortedLocations // LIMIT POSTS

  const [placesList, setPlacesList] = useState(limitedPosts)

  const uniqueLocationsList = () => {
    const placesLocations: Array<string> = []
    places.map(el => (
      placesLocations.push(el.acf.location)
    ))
    return [...new Set(placesLocations)]
  }

  const handleChange = (e: any) => {
    e.preventDefault()

    if (e.target.value === 'all') {
      setPlacesList(limitedPosts)
    } else {
      setPlacesList(limitedPosts.filter(el => el.acf.location === e.target.selectedOptions[0].text))
    }
  }

  return (

    <>
      {type === 'placesList' && (
        <>
          <div className="container flex justify-end gap-4 items-center py-8">
            <label htmlFor="locationFilter">Filter by location: </label>
            <select name="locationFilter" id="locationFilter" onChange={handleChange} className="px-3 py-2 ring-1 ring-gray-700 rounded-md">
              <option value="all">All</option>
              {
                uniqueLocationsList().map(loc => (
                  <option key={loc} value={slugify(loc)}>{loc}</option>
                ))
              }
            </select>
          </div>
          <hr className="h-[1px] bg-gray-700" />
        </>
      )}


      <Gsapify>
        <section className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between overflow-hidden mt-8">
          {
            placesList.map(place => (
              <PlaceCard key={place.slug} place={place} />
            ))
          }
        </section>
      </Gsapify>
    </>
  );
}

export default PlacesList;
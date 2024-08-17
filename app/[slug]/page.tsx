import { location } from "@/types";
import Image from "next/image";
import { roboto_slab } from "../layout";
import BackLink from "@/components/BackLink";
import { getPlaces } from "@/actions";

const SingleView = async ({ params }: any) => {

  const locations = await getPlaces()


  const place = locations.filter((el: location) => el.slug === params.slug)[0]

  console.log('PLACE: ', place)

  return (
    <>
      <section className="relative h-1/2">
        <Image
          src={place._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url}
          fill
          alt={place._embedded['wp:featuredmedia']['0'].alt_text}
          style={{ objectFit: 'cover' }}
          sizes='
                (max-width: 500px) 400px,
                (max-width: 900px) 800px,
                1920px'
          priority
        />
        <div className="relative z-10 text-white h-full flex flex-col justify-end container pb-8">
          <BackLink />
          <h1 className={`${roboto_slab.className} -mb-4 mt-0`}>{place.title.rendered}</h1>
          <p className="max-w-[450px]">{place.acf.description}</p>
        </div>
      </section>
      <main className="container py-16 main-content">
        <div dangerouslySetInnerHTML={{ __html: place.content.rendered }} className="md:text-lg" />
      </main>

    </>
  );
}

export default SingleView;
import { location } from "@/types";
import Image from "next/image";
import BackLink from "@/components/BackLink";
import { getPage } from "@/actions";
import parse from 'html-react-parser';

const SingleView = async ({ params }: { params: { slug: string } }) => {

  const thepage = await getPage(params.slug)

  const page = thepage[0]

  return (
    <>
        
      <section className="relative h-1/3 bg-black">
        <Image
          src="/ocean2.jpg"
          fill
          alt="Image of the ocean."
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
          <h1 className="-mb-4 mt-0">{page.title.rendered}</h1>
          <p className="max-w-[450px]">{page.acf.description}</p>
        </div>
      </section>
      <main className="container py-16 main-content page-main-content">
        <div className="richText md:text-lg">{parse(page.content.rendered)}</div>
      </main>

    </>
  );
}

export default SingleView;
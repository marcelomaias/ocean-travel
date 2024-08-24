import { FaMapLocationDot, FaPhone, FaSitemap } from "react-icons/fa6";
import SectionB from "@/components/SectionB";
import Image from "next/image";
import BackLink from "@/components/BackLink";
import ContactForm from "@/components/ContactForm";
import { IoLocationSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";

export default async function ContactPage() {

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
          <h1 className="-mb-4 mt-0">Contact</h1>
          <p className="max-w-[450px]">Get in touch</p>
        </div>
      </section>

      <main className="container">
        <div className="flex gap-20 mt-20 max-w-[692px] mx-auto">
          <div className="w-2/3">
            <ContactForm />
          </div>
          <div className="w-1/3">
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <span className="font-light">Nunc lobortis mattis aliquam faucibus purus in massa arcu odio ut sem nulla pharetra diam amet.</span>

            <div className="flex items-center gap-2 mt-8">
              <IoLocationSharp size={24} />
              <div>
                <div className="font-semibold text-sm">Address:</div>
                <address className="font-light not-italic">Street Name, NY 38954</address>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <FaPhone size={24} />
              <div>
                <div className="font-semibold text-sm">Phone:</div>
                <div className="font-light not-italic">5555-5555</div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <FaMobileAlt size={24} />
              <div>
                <div className="font-semibold text-sm">Mobile:</div>
                <div className="font-light not-italic">5555-5555</div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <SectionB />

      <div className="container mx-auto mb-20 mt-20 px-2 flex justify-between flex-col sm:flex-row gap-20">
        <div className="flex items-center gap-8">
          <FaMapLocationDot size="4em" className="flex-shrink-0" color="#333333" />
          <div>
            <h4 className="font-semibold text-2xl">Cras suscipit enim</h4>
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim enim, quis convallis risus scelerisque nec. Nulla facilisi. Maecenas eget libero tempus, dictum nunc ac.</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <FaSitemap size="4em" className="flex-shrink-0" color="#333333" />
          <div>
            <h4 className="font-semibold text-2xl">Volutpat lacus scelerisque</h4>
            <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim enim, quis convallis risus scelerisque nec. Nulla facilisi. Maecenas eget libero tempus, dictum nunc ac.</p>
          </div>
        </div>
      </div>

    </>
  );
}

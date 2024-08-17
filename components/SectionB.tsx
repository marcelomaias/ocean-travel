import Image from "next/image";
import { FaUserAstronaut } from "react-icons/fa6";
import { roboto_slab } from "@/app/layout";
import Link from "next/link";

const SectionB = () => {
  return (
    <section className="py-20 my-20 bg-[#f8f9fb] bg-[url('/topography.svg')]">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="relative h-[250px] sm:h-auto">
          <Image
            src="/ocean2.jpg"
            fill
            alt='Cover'
            style={{ objectFit: 'cover' }}
            sizes='
                (max-width: 500px) 300px,
                (max-width: 900px) 500px,
                1920px'
            className="rounded-2xl aspect-video"
          />
        </div>
        <div>
          <h2 className={`mt-0 ${roboto_slab.className}`}>Lonsectetur adipiscing elit</h2>
          <p>Lonsectetur adipiscing elit. Integer iaculis pharetra purus ut porta. Nulla facilisi. Proin egestas enim eu justo imperdiet blandit.</p>

          <p>Commodo, urna ut pharetra eleifend, tellus ante suscipit nulla, at convallis nisl purus vitae turpis. Vivamus commodo vel dui vel tempor. Proin aliquam nisl non dui dapibus euismod.</p>

          <Link className="inline-block px-6 py-3 ring-2 ring-black text-black mt-8" href="/">Explore now!</Link>
        </div>



      </div>
    </section>
  );
}

export default SectionB;
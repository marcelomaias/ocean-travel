import { footerLinks } from "@/data";
import Link from "next/link";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#f8f9fb] bg-[url('/topography.svg')] py-20">
      <div className="container">

        <div className="sm:grid grid-cols-4">
          <div className="col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 justify-between">
              {footerLinks.map(item => (
                <div key={item.title} className="last:hidden sm:last:block">
                  <h3 className="font-semibold">{item.title}</h3>
                  <ul>
                    {item.links.map(link => (
                      <li key={link.title}>
                        <Link href={link.url} className="inline-block font-light border-b-2 border-black mt-3" >{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 text-sm mt-12">
              <div className="mr-8">
                <h3 className="font-semibold">Achievements</h3>
                <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Leo urna molestie at elementum pellentesque habitant tristique.</p>
              </div>

              <div className="mr-8">
                <h3 className="font-semibold">Useful Information</h3>
                <p>Amet commodo nulla facilisi nullam vehicula ipsum. Faucibus pulvinar elementum integer enim.</p>
              </div>

              <div className="mr-8 hidden sm:block">
                <h3 className="font-semibold">Targets & Plans</h3>
                <p>Fringilla urna porttitor rhoncus dolor purus nonulla malesuada pellentesque elit eget.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-12 sm:mt-0">
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <span className="font-light">Nunc lobortis mattis aliquam faucibus purus in massa arcu odio ut sem nulla pharetra diam amet.</span>

            <div className="flex items-center gap-2 mt-14">
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





      </div>
    </section>
  );
}

export default Footer;
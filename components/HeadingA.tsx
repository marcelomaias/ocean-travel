import { roboto_slab } from "@/app/layout";

type HeadingAProps = {
  title: string
  subtitle: string
}

const HeadingA = ({ title, subtitle }: HeadingAProps) => {
  return (
    <div className="container mb-12">
      <span className="block uppercase tracking-widest font-light -mb-2 mt-12">{subtitle}</span>
      <h2 className={`mt-0 ${roboto_slab.className}`}>{title}</h2>
    </div>
  );
}

export default HeadingA;
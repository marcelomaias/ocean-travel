'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const BackLink = () => {

  const router = useRouter()

  return (
    <Link href="#" onClick={() => router.back()} className="flex items-center gap-2 w-max">
      <FaArrowLeft size={32} />
      <span className="text-sm uppercase tracking-wider">Back</span>
    </Link>
  );
}

export default BackLink;
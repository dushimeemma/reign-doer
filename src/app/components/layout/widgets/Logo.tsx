import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={250}
        height={100}
        alt="Picture of the author"
        className={` cursor-pointer w-[5.625rem] md:w-[10.625rem] lg:w-[15.625rem] ${className}`}
      />
    </Link>
  );
}
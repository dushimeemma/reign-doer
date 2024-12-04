import Image from "next/image";

import { MouseEventHandler } from "react";

interface SeeMoreProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  size?: number;
  classNames?: string;
}

export default function SeeMore({
  onClick,
  size,
  label,
  classNames,
}: SeeMoreProps) {
  return (
    <button
      className={`flex-1 flex flex-row items-center ${classNames}`}
      onClick={onClick}
    >
      <span className="text-primary mr-2">{label ?? "See projects"}</span>
      <Image
        src="/arrow-next.png"
        width={size ?? 30}
        height={size ?? 30}
        alt="arrow next"
      />
    </button>
  );
}

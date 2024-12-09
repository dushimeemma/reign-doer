import { MouseEventHandler } from "react";
import CustomIcon from "./CustomIcon";

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
      <CustomIcon size={size} />
    </button>
  );
}

import Link from "next/link";

interface SubTitleProps {
  label?: string;
  classNames?: string;
  link?: string;
}

export default function SubTitle({ classNames, label, link }: SubTitleProps) {
  return (
    <Link
      href={link ?? "#services"}
      className={`font-light cursor-pointer my-2 ${classNames}`}
    >
      {label ?? "Website Development"}
    </Link>
  );
}

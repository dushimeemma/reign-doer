import Link from "next/link";

interface FooterTitleProps {
  classNames?: string;
  label?: string;
  link?: string;
}

export default function FooterTitle({
  classNames,
  label,
  link,
}: FooterTitleProps) {
  return (
    <Link
      href={link ?? "#services"}
      className={`font-bold text-2xl my-3 cursor-pointer ${classNames}`}
    >
      {label ?? "Services"}
    </Link>
  );
}

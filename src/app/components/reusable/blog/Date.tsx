import Image from "next/image";

interface DateViewProps {
  label?: string;
  classNames?: string;
  imageClassNames?: string;
  size?: number;
  imageAlt?: string;
  textClassNames?: string;
  image?: string;
}

export default function DateView({
  label,
  classNames,
  imageClassNames,
  size,
  imageAlt,
  textClassNames,
  image,
}: DateViewProps) {
  return (
    <div
      className={`cursor-pointer opacity-50 text-primary font-light text-sm flex items-center justify-center ${classNames}`}
    >
      <Image
        src={image ?? "/calendar.png"}
        width={size ?? 16}
        height={size ?? 16}
        alt={imageAlt ?? "calendar"}
        className={`${imageClassNames}`}
      />
      <span className={`ml-2 text-sm ${textClassNames}`}>
        {label ?? "1 month ago"}
      </span>
    </div>
  );
}

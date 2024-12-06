import Image from "next/image";

import Description from "@/app/components/reusable/blog/Description";
import DateView from "@/app/components/reusable/blog/Date";

interface BlogProps {
  image?: string;
  widthSize?: number;
  heightSize?: number;
  imageAlt?: string;
  description?: string;
  month?: string;
  minutes?: string;
  classNames?: string;
  imageClassNames?: string;
  textClassNames?: string;
}

export default function Blog({
  image,
  imageAlt,
  description,
  month,
  minutes,
  classNames,
  imageClassNames,
  textClassNames,
  widthSize,
  heightSize,
}: BlogProps) {
  return (
    <div className={`flex cursor-pointer ${classNames}`}>
      <Image
        src={image ?? "/blog-1.png"}
        width={widthSize ?? 585}
        height={heightSize ?? 585}
        alt={imageAlt ?? "Blog Image"}
        className={`w-full ${imageClassNames}`}
      />
      <div className="flex flex-col">
        <Description
          text={description}
          classNames={`self-center ${textClassNames}`}
        />
        <div className="flex flex-row self-end gap-x-3">
          <DateView label={month} />
          <DateView image="/clock.png" label={minutes ?? "8 minutes"} />
        </div>
      </div>
    </div>
  );
}

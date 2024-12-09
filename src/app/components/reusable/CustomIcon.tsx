import Image from "next/image";

interface CustomIconProps {
  size?: number;
  src?: string;
  alt?: string;
}

export default function CustomIcon({ size, src, alt }: CustomIconProps) {
  return (
    <Image
      src={src ?? "/arrow-next.png"}
      width={size ?? 30}
      height={size ?? 30}
      alt={alt ?? "arrow next"}
    />
  );
}

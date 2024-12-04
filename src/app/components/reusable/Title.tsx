interface TitleProps {
  title?: string;
  classNames?: string;
}

export default function Title({ title, classNames }: TitleProps) {
  return (
    <h1
      className={`text-2xl text-primary ${classNames} text-center lg:text-start`}
    >
      {title ?? "Our service list"}
    </h1>
  );
}

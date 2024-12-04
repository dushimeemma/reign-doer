interface SubTitleProps {
  text?: string;
  classNames?: string;
}

export default function SubTitle({ text, classNames }: SubTitleProps) {
  return (
    <h2 className={`text-4xl ${classNames} text-center lg:text-start`}>
      {text ?? " What we are offering"}
    </h2>
  );
}

interface DescriptionProps {
  text?: string;
  classNames?: string;
}

export default function Description({ text, classNames }: DescriptionProps) {
  return (
    <p className={`text-primary font-light m-6 ${classNames}`}>
      {text ??
        "Revolutionizing Development: Unveiling the Secrets Behind Our Latest Software Solution"}
    </p>
  );
}

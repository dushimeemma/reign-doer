interface TextBadgeProps {
  classNames?: string;
  count: number;
  label: string;
}

export default function TextBadge({
  classNames,
  count,
  label,
}: TextBadgeProps) {
  return (
    <div className={`flex flex-col cursor-pointer ${classNames}`}>
      <span className="text-primary text-2xl font-bold">{count}+</span>
      <span className="font-light">{label}</span>
    </div>
  );
}

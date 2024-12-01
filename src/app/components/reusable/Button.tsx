interface ButtonProps {
  children: React.ReactNode | string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-primary text-white py-2 px-4 rounded-[1.875rem] w-full font-semibold ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

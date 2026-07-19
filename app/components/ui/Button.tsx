import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-6
      py-3
      transition
      duration-300
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
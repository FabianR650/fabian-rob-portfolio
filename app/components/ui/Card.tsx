interface CardProps {
  children: React.ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="
      rounded-2xl
      border
      border-slate-700
        bg-gradient-to-r from-cyan-500 via-white to-blue-500/20
      p-6
      shadow-lg
      hover:-translate-y-2
      hover:shadow-blue-500/30
      transition-all
    ">
      {children}
    </div>
  );
}
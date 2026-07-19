interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-16 text-center">
      <h2
        className="
          text-4xl font-bold
          text-slate-900 dark:text-white
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mx-auto mt-4 max-w-2xl
            text-slate-600 dark:text-slate-300
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

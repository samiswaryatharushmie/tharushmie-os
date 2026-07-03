type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      <p className="text-violet-400 uppercase text-sm">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold mt-2">
        {title}
      </h2>
    </div>
  );
}
type StatCardProps = {
  number: string;
  title: string;
};

export default function StatCard({
  number,
  title,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/5
        bg-[#111827]
        px-6
        py-5
      "
    >
      <h3 className="text-3xl font-bold text-violet-400">
        {number}
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        {title}
      </p>
    </div>
  );
}
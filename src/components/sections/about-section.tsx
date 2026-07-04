import { about } from "@/data/about/about";
import Badge from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section className="py-32">

      <div className="max-w-5xl">

        <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
          ABOUT
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          {about.title}
        </h2>

        <p className="mt-2 text-xl text-gray-400">
          {about.subtitle}
        </p>

        <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-400 whitespace-pre-line">
          {about.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">

          {about.highlights.map((item) => (
            <Badge
              key={item}
              title={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
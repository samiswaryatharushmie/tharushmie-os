import { profile } from "@/data/profile/profile";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import StatCard from "@/components/ui/stat-card";

export default function HeroSection() {
  return (
    <section
      className="
        grid
        grid-cols-1
        xl:grid-cols-[1.05fr_0.95fr]
        items-center
        gap-16
        xl:gap-24
        min-h-[650px]
        xl:min-h-[calc(100vh-120px)]
      "
    >
      {/* ================= LEFT ================= */}

      <div className="w-full max-w-full xl:max-w-[640px]">

        {/* Greeting */}

        <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
          {profile.greeting}
        </p>

        {/* Name */}

        <h1 className="mt-5 leading-none">

          <span className="block text-5xl md:text-6xl xl:text-7xl font-black text-white">
            {profile.firstName}
          </span>

          <span className="mt-2 block text-5xl md:text-6xl xl:text-7xl font-black text-violet-400">
            {profile.lastName}
          </span>

        </h1>

        {/* Badges */}

        <div className="mt-8 flex flex-wrap gap-3">

          <Badge title={profile.title} />

          {profile.roles.map((role) => (
            <Badge
              key={role}
              title={role}
            />
          ))}

        </div>

        {/* Description */}

        <p className="mt-8 max-w-[560px] text-base md:text-lg leading-8 text-gray-400">
          {profile.description}
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <Button>
            View Projects
          </Button>

          <Button variant="secondary">
            Download CV
          </Button>

        </div>

        {/* Stats */}

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {profile.stats.map((item) => (
            <StatCard
              key={item.title}
              number={item.number}
              title={item.title}
            />
          ))}

        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="flex justify-center xl:justify-end">

        <div
          className="
            relative
            flex
            items-center
            justify-center
            h-[320px]
            w-[320px]
            md:h-[420px]
            md:w-[420px]
            xl:h-[520px]
            xl:w-[520px]
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              h-[260px]
              w-[260px]
              md:h-[340px]
              md:w-[340px]
              xl:h-[430px]
              xl:w-[430px]
              rounded-full
              bg-violet-600/10
              blur-[110px]
            "
          />

          {/* Outer Ring */}

          <div
            className="
              absolute
              h-[300px]
              w-[300px]
              md:h-[380px]
              md:w-[380px]
              xl:h-[470px]
              xl:w-[470px]
              rounded-full
              border
              border-violet-500/20
            "
          />

          {/* Inner Ring */}

          <div
            className="
              absolute
              h-[260px]
              w-[260px]
              md:h-[330px]
              md:w-[330px]
              xl:h-[400px]
              xl:w-[400px]
              rounded-full
              border
              border-violet-500/30
            "
          />

          {/* Portrait */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
              h-[220px]
              w-[220px]
              md:h-[280px]
              md:w-[280px]
              xl:h-[340px]
              xl:w-[340px]
              rounded-full
              border
              border-violet-500/40
              bg-[#171B2E]
              shadow-[0_0_80px_rgba(139,92,246,0.12)]
            "
          >

            <span className="text-xs tracking-[0.3em] text-gray-500">
              YOUR PORTRAIT
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}
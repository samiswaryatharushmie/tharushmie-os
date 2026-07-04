import Link from "next/link";
import {
  Home,
  User,
  Code2,
  FolderKanban,
  GraduationCap,
  Briefcase,
  Trophy,
  Mail,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "About",
    href: "/about",
    icon: User,
  },
  {
    title: "Skills",
    href: "/skills",
    icon: Code2,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Education",
    href: "/education",
    icon: GraduationCap,
  },
  {
    title: "Experience",
    href: "/experience",
    icon: Briefcase,
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: Trophy,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
        w-60
        shrink-0
        border-r
        border-white/5
        bg-[#101827]
        flex
        flex-col
        justify-between
      "
    >
      {/* ================= Logo ================= */}

      <div>
        <div className="px-8 pt-8 pb-6">

          <h1 className="text-3xl font-black tracking-tight">

            <span className="text-white">
              TS
            </span>

            <span className="text-violet-500">
              OS
            </span>

          </h1>

        </div>

        {/* ================= Navigation ================= */}

        <nav className="flex flex-col gap-2 px-4">

          {menuItems.map((item, index) => {

            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  transition-all
                  duration-300

                  ${
                    index === 0
                      ? "bg-violet-600/20 border border-violet-500/30 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon size={18} />

                <span className="text-[15px] font-medium">
                  {item.title}
                </span>
              </Link>
            );

          })}

        </nav>
      </div>

      {/* ================= Bottom ================= */}

      <div className="p-5">

        <div
          className="
            rounded-2xl
            border
            border-violet-500/20
            bg-[#171B2E]
            p-4
          "
        >

          <p className="text-xs uppercase tracking-widest text-violet-400">
            System Status
          </p>

          <div className="mt-3 flex items-center gap-2">

            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />

            <span className="text-sm text-gray-300">
              All Systems Operational
            </span>

          </div>

        </div>

      </div>
    </aside>
  );
}
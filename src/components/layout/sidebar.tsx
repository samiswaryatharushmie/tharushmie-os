import { navigation } from "@/constants/navigation";

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen border-r border-white/10 bg-[#111827]">
      <div className="p-8">

        <h1 className="text-2xl font-bold">
          TS
          <span className="text-violet-400 ml-2">
            OS
          </span>
        </h1>

      </div>

      <nav className="px-4">

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="
                flex
                items-center
                gap-3
                w-full
                rounded-xl
                px-4
                py-3
                text-left
                text-gray-300
                transition-all
                duration-300
                hover:bg-violet-500/10
                hover:text-white
              "
            >
              <Icon size={18} />
              {item.title}
            </button>
          );
        })}

      </nav>
    </aside>
  );
}
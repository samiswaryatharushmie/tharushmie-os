import { Bell, Search, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-[#09090B] px-8 py-5">
      {/* Search */}

      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#171B2E] px-4 py-3 w-[420px]">

        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
        />

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">

        <Bell
          className="cursor-pointer text-gray-400 hover:text-white transition"
          size={20}
        />

        <Settings
          className="cursor-pointer text-gray-400 hover:text-white transition"
          size={20}
        />

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 font-semibold">
          TS
        </div>

      </div>
    </header>
  );
}
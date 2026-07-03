import Sidebar from "./sidebar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-[#09090B]">

      <Sidebar />

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}
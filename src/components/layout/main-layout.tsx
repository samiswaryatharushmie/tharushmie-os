import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import PageContainer from "@/components/ui/page-container";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#09090B] text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Topbar />

        <main className="flex-1 overflow-y-auto py-10">
        <PageContainer>
            {children}
        </PageContainer>
        </main>

      </div>

    </div>
  );
}
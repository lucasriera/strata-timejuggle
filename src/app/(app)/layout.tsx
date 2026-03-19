import { Sidebar } from "@/components/layout/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="ml-[220px] flex-1 flex flex-col min-h-screen">
        {children}
      </main>
    </div>
  );
}

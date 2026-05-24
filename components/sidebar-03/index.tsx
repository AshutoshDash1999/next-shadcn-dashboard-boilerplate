import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/sidebar-03/app-sidebar";

export default function Sidebar03({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="relative flex h-dvh w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}

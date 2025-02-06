import React from "react";
import { Sidebar as ShadcnSidebar, SidebarProvider } from "@/components/ui/sidebar";

export function Sidebar() {
  return (
    <SidebarProvider>
      <ShadcnSidebar className="h-screen w-64">
        {/* Add your sidebar content here */}
        <div className="p-4">
          <h2 className="mb-4 text-xl font-bold">Dashboard</h2>
          {/* Add navigation items */}
        </div>
      </ShadcnSidebar>
    </SidebarProvider>
  );
}

import NavSecondary from "@/components/NavBelow";
import NavMain from "@/components/NavMain";
import NavUserManagement from "@/components/NavUserManagement";
import NavSideHeader from "@/components/NavSideHeader";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconLogout,
  IconReport,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { Outlet } from "react-router";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard-page",
      icon: IconDashboard,
    },
    {
      title: "Barangay Management",
      url: "/barangay-page",
      icon: IconListDetails,
    },
    {
      title: "Rental Management",
      url: "/rental-page",
      icon: IconChartBar,
    },
    {
      title: "Business Management",
      url: "/business-page",
      icon: IconFolder,
    },
    {
      title: "Feedback",
      url: "/feedback-page",
      icon: IconUsers,
    },
  ],

  documents: [
    {
      title: "Role Management",
      url: "/role-page",
      icon: IconDatabase,
    },
    {
      title: "User Management",
      url: "/user-page",
      icon: IconReport,
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Logout",
      url: "/",
      icon: IconLogout,
    },
  ],
};
const DashboardLayout = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      {/* <AppSidebar variant="inset" /> */}
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Sidebar collapsible="offcanvas">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex justify-center">
                  <a href="/dashboard-page">
                    <IconInnerShadowTop />
                    <span className="text-2xl font-semibold text-primary">
                      BNB Inc.
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <NavMain items={data.navMain} />
            <NavUserManagement items={data.documents} />
            <NavSecondary items={data.navSecondary} className="mt-auto" />
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}

        <SidebarInset>
          <NavSideHeader />
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;

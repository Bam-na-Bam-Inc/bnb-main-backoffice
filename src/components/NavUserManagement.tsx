import { type Icon } from "@tabler/icons-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";

const NavMain = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: Icon;
  }[];
}) => {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="font-bold text-lg text-primary">
        User Management
      </SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <NavLink
                to={item.url}
                className="flex items-center gap-2 transition"
              >
                {({ isActive }) => (
                  <div
                    className={`flex items-center gap-2 rounded-lg w-full p-2
                    ${isActive ? "bg-primary text-white" : "hover:bg-muted"}`}
                  >
                    <item.icon
                      className={`h-4 w-4 ${isActive ? "text-white" : "text-black"}`}
                    />
                    <span
                      className={`text-base ${isActive ? "text-white" : "text-black"}`}
                    >
                      {item.title}
                    </span>
                  </div>
                )}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;

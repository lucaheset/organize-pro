import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "../ui/sidebar";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "To do's",
    url: "/todo-page",
    icon: Inbox,
  },
  {
    title: "Finance",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function SideBarComponent() {
  return (
    <Sidebar>
      <SidebarContent className="bg-gray-950 text-white border-r-1 border-gray-800">
        <SidebarGroup>
          <div className="flex justify-end">
            <SidebarTrigger></SidebarTrigger>
          </div>
          <div className="flex justify-center items-center p-5 border-b-2 border-gray-800">
            <h1 className="font-bold text-lg">OrganizaPro</h1>
          </div>
          <div className="flex justify-between">
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

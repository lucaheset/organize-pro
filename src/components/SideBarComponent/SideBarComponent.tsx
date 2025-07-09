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
      <SidebarContent className="w-64 bg-gray-950 text-white h-screen flex flex-col border-r border-gray-800 p-0">
        <SidebarHeader className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">O</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-white">OrganizePro</h1>
              <p className="text-gray-400 text-xs">Your productivity</p>
            </div>
          </div>
        </SidebarHeader>

        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3 bg-gray-900 rounded-lg p-3 hover:bg-gray-800 transition-colors duration-200">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <div>
              <p className="font-medium text-sm text-white">Luca</p>
              <p className="text-gray-400 text-xs">Premium User</p>
            </div>
          </div>
        </div>

        <SidebarGroupContent className="flex-1 p-4">
          <SidebarMenu>
            {items.slice(0, 3).map((item) => (
              <SidebarMenuItem key={item.title} className="my-1">
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    <span className="font-medium">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>

        <SidebarFooter className="p-4 border-t border-gray-800">
          <SidebarMenu>
            {items.slice(3).map((item) => (
              <SidebarMenuItem key={item.title} className="my-1">
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-left transition-all duration-200 group text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <div className="mt-4 flex flex-col items-center">
            <span className="text-xs text-gray-500">© 2024 OrganizaPro</span>
          </div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}

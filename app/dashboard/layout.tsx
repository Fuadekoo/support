"use client";
import React from "react";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery("(max-width: 768px)");
  return (
    <div className="grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {isDesktop && (
        <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
          <MenuTitle />
          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu className="w-64" />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-auto py-2 px-4">
        <h1>Welcome Back,Fuad</h1>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;

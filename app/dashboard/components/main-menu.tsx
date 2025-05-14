import React from "react";
import MenuTitle from "./menu-title";
import Link from "next/link";
import MenuItems from "./menu-items";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { cn } from "@/lib/utils";

function MainMenu({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        " bg-muted overflow-auto py-2 px-4 flex flex-col gap-4",
        className
      )}
    >
      <header className="border-b dark:border-b-black border-b-zinc-200 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow ">
        <MenuItems href="/dashboard">Dashboard</MenuItems>
        <MenuItems href="/dashboard/teams">Teams</MenuItems>
        <MenuItems href="/dashboard/employees">employees</MenuItems>
        <MenuItems href="/dashboard/account">Account</MenuItems>
        <MenuItems href="/dashboard/settings">Settings</MenuItems>
      </ul>
      <footer className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underLine">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}

export default MainMenu;

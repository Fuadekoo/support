"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  href: string;
};
function MenuItems({ children, href }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block p-2 hover:bg-white dark:hover:bg-gray-500 rounded-md text-muted-foreground hover:text-foreground text-foreground",
          isActive &&
            "bg-primary hover:bg-primary dark:bg-primary text-foreground"
        )}
      >
        {children}
      </Link>
    </li>
  );
}

export default MenuItems;

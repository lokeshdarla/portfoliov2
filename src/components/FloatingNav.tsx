"use client";
import React from "react";
import { FloatingNavUtil } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconWritingSign, IconStackBack } from "@tabler/icons-react";
import { useTheme } from "@/context/ThemeContext";

export function FloatingNav() {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    {
      name: "Home",
      link: "home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blog",
      link: "blog",
      icon: (
        <IconWritingSign className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Work",
      link: "works",
      icon: (
        <IconStackBack className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNavUtil navItems={navItems} />
    </div>
  );
}

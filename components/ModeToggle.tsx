"use client";

import * as React from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MonitorSmartphone, Moon, MoonIcon, Sun, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex gap-3 items-center justify-start"
          onClick={() => setTheme("light")}
        >
          <Sun size={20} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-3 items-center justify-start"
          onClick={() => setTheme("dark")}
        >
          <Moon size={20} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-3 items-center justify-start"
          onClick={() => setTheme("system")}
        >
          <MonitorSmartphone size={20} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

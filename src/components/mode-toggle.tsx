"use client";

import styles from "./mode-toggle.module.css";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Menu } from "@base-ui-components/react/menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Menu.Root>
      <Menu.Trigger className="size-8 hover:bg-stone-100 transition dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg flex justify-center items-center">
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 dark:stroke-white" />
        <span className="sr-only">Toggle theme</span>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner align="end" sideOffset={5} className="w-24">
          <Menu.Popup
            className={`*:dark:text-gray-100 bg-white dark:bg-black shadow-sm p-1 rounded-lg *:font-sans *:text-sm ${styles.Popup}`}
          >
            <Menu.Item
              onClick={() => setTheme("light")}
              className="p-1 px-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition"
            >
              Light
            </Menu.Item>
            <Menu.Item
              onClick={() => setTheme("dark")}
              className="p-1 px-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition"
            >
              Dark
            </Menu.Item>
            <Menu.Item
              onClick={() => setTheme("system")}
              className="p-1 px-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition"
            >
              System
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

"use client";

import { forwardRef } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export const ModeToggle = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ ...props }, ref) => {
        const { theme, setTheme } = useTheme();

        return (
            <div ref={ref} {...props}>
                <Button
                    variant="ghost"
                    type="button"
                    size="icon"
                    className="px-2"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
                    <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 hidden dark:block dark:text-neutral-200" />
                </Button>
            </div>
        );
    }
);

ModeToggle.displayName = "ModeToggle";

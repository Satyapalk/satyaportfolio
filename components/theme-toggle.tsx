"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="size-9">
        <Monitor className="size-4" />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const getIcon = () => {
    if (theme === "system") return <Monitor className="size-4" />;
    if (theme === "light") return <Sun className="size-4" />;
    return <Moon className="size-4" />;
  };

  return (
    <Button variant="ghost" size="icon" className="size-9" onClick={cycleTheme}>
      {getIcon()}
    </Button>
  );
}
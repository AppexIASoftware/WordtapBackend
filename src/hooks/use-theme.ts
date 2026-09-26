"use client";

import { useState, useCallback } from "react";

export function useTheme() {
  const [theme, setThemeState] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("wordtap_theme") as "light" | "dark" | null;
    return saved || (document.documentElement.classList.contains("dark") ? "dark" : "light");
  });

  const setTheme = useCallback((next: "light" | "dark") => {
    setThemeState(next);
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      if (next === "dark") {
        html.classList.remove("light");
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
        html.classList.add("light");
      }
      localStorage.setItem("wordtap_theme", next);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
      if (typeof document !== "undefined") {
        const html = document.documentElement;
        if (next === "dark") {
          html.classList.remove("light");
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
          html.classList.add("light");
        }
        localStorage.setItem("wordtap_theme", next);
      }
      return next;
    });
  }, []);

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme,
    setTheme,
  };
}

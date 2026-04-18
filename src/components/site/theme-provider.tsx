"use client";

import { useEffect } from "react";

const STORAGE_KEY = "lirati.theme";

export type ThemeMode = "dark" | "light";

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    applyTheme(stored ?? "dark");
  }, []);

  return <>{children}</>;
}

export function toggleTheme(): ThemeMode {
  const root = document.documentElement;
  const next: ThemeMode = root.classList.contains("dark") ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
  return next;
}

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
}

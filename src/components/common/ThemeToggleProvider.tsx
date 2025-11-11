import React, { createContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { baseTheme } from "@/src/themes/baseTheme";
import { getAdaptiveVars } from "@/src/themes/adaptiveColors";

export const ThemeToggleContext = createContext({
  themeMode: "light" as "light" | "dark",
  toggleTheme: () => {},
  adaptiveVars: getAdaptiveVars(),
});

export const ThemeToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mounted, setMounted] = useState(false);

  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const [adaptiveVars, setAdaptiveVars] = useState(getAdaptiveVars());

  // ✅ 최초 마운트 시 localStorage와 시스템 설정 반영
  useEffect(() => {
    const saved = localStorage.getItem("themeMode");
    const mode = saved === "light" || saved === "dark" ? saved : (prefersDark ? "dark" : "light");
    setThemeMode(mode);
    document.documentElement.dataset.theme = mode;
    setAdaptiveVars(getAdaptiveVars());
    setMounted(true);
  }, [prefersDark]);

  // ✅ 테마 전환 시 반영
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = themeMode;
    localStorage.setItem("themeMode", themeMode);
    setAdaptiveVars(getAdaptiveVars());
  }, [themeMode, mounted]);

  const toggleTheme = () => {
    setThemeMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", next);
      document.documentElement.dataset.theme = next;
      return next;
    });
  };

  const muiTheme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: {
          mode: themeMode,
          primary: { main: adaptiveVars.blue[500] },
          background: {
            default: adaptiveVars.background.base,
            paper: adaptiveVars.background.layered,
          },
          text: {
            primary: adaptiveVars.grey[900],
            secondary: adaptiveVars.grey[700],
          },
        },
      }),
    [adaptiveVars, themeMode]
  );

  // ✅ 클라이언트 전까지는 아무것도 렌더하지 않음 (깜빡임 방지)
  if (!mounted) return null;

  return (
    <ThemeToggleContext.Provider value={{ themeMode, toggleTheme, adaptiveVars }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

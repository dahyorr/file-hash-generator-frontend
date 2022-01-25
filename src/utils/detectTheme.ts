import { ThemeMode } from "@/types";

export const detectTheme= (): ThemeMode  => {
    const lightThemeMatch = window.matchMedia("(prefers-color-scheme: light)").matches;
    return lightThemeMatch ? 'light' : 'dark'
}
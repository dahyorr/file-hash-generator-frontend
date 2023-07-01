import { ThemeMode } from "@/types";

export const detectTheme = (): ThemeMode => {
    if (typeof window === 'undefined') {
        return 'light'
    }
    const lightThemeMatch = window?.matchMedia("(prefers-color-scheme: light)").matches || true;
    return lightThemeMatch ? 'light' : 'dark'
}
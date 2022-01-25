export type ThemeMode = 'light' | 'dark'

export interface NavChildItemProps {
    label: string;
    path: string;
    disabled: boolean;
    closeSidebar?: () => void;
}

export interface NavMainItemProps {
label: string;
dropdown: boolean;
path?: string;
icon: React.ReactNode;
disabled?: boolean;
links?: NavChildItemProps[];
open?: boolean;
}
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

export type HashType = 'sha256' | 'md5' | 'sha512' | 'sha224'

export type StatusType = "Pending" | "Failed" | "Completed"

export interface HashData {
    hashType: HashType;
    hash: string;
    status: StatusType;
}

export interface HashRequest{
    fileId: string;
    hashTypes: HashType[];
}
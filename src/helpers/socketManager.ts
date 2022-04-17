import {Manager} from "socket.io-client";

export const socketManager = new Manager(
    import.meta.env.VITE_BASE_URL as string || ``,
    {autoConnect: false}
)
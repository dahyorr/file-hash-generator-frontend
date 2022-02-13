import {Manager} from "socket.io-client";

export const socketManager = new Manager(
    ``,
    {autoConnect: false}
)
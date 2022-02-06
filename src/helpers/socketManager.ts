import {Manager} from "socket.io-client";

console.log(`${window.location.origin}`)
export const socketManager = new Manager(
    ``,
    {autoConnect: false}
)
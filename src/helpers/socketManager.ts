import {Manager} from "socket.io-client";

export const socketManager = new Manager('http://localhost:5000', {autoConnect: false})
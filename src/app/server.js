import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io"

const app = next({ dev: true, hostname: "localhost", port: 3001 });
const handler = app.getRequestHandler();

app.prepare().then(() => {

    const httpServer = createServer(handler);

    const io = new Server(httpServer);

    io.on("connection", (socket) => {

    })
    httpServer.once("error", (err) => {
        console.error(err)
        process.exit(1)
    })
})
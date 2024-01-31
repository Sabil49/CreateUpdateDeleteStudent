// for express connect to server
const express = require("express");
const colors = require("colors");

const dbConnect = require("./db/db.js");
const studentRoutes = require("./routes/studentRoute");
const cors = require("cors");
const app = express();


app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

dbConnect();

const server = app.listen(4000, () => {
    console.log( colors.brightMagenta(`\nServer is UP on PORT 4000`));
    console.log(`Visit  ` + colors.underline.blue(`localhost:${4000}`));
});

app.use("/student", studentRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello from Student server",
    });
});

// for node connect to server
/*
 * import http from "http";
const server = http.createServer((req, res) => {
    res.end("Hello from server");
});

server.listen(4000, "localhost", () => console.log("server is running on port 4000"));
*/
 




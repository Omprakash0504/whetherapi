const http = require("http");
const fs = require("fs");
var request = require("request");


const homeFile = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {
    var arrayData;
    if (req.url == "/") {
        request("https://mocki.io/v1/cc43a273-2b5e-426c-bd1f-3a3a74720e7b").on("data", (chunk) => {
            const objData = JSON.parse(chunk);
            arrayData = objData;
            console.log(objData);
        }).on("end", (err) => {
            if (err)
                return console.log("connection end due to error", err);
        })
    }
      
    res.end("homeFile")
});

server.listen(8000, "127.0.0.1");

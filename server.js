import http from "http";
const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello World!</h1>");
    res.write("<p>This is a Simple HTTP Server</p>");
    res.end();
});
server.listen(3000,() => {
    console.log("Server running at http://localhost:3000");
});
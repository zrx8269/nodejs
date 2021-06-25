const http = require("http");
const fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/index.html");
// var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// // // example1
// // myReadStream.on("data", (data) => {
// // 	console.log("new Chunk received");
// // 	console.log(data);
// // 	myWriteStream.write(data);
// // });

// // example2: pipe
// // myReadStream.pipe(myWriteStream);

http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html;charset=utf-8"
	});

	fs.createReadStream(__dirname + "/index.html").pipe(res);

}).listen(3000, () => {
	console.log("listening 3030...");
});
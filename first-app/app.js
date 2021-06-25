// // function sayHello(name) {
// // 	console.log("Hello " + name);
// // }
// // sayHello("Rachel");
// // var message = "dddd";
// // console.log(global.message)

// console.log(module)

// var logger = require("./logger.js");
// logger.log("ddd");

// const os = require("os");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);

// const fs = require("fs");

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir("./", (err, files) => {
// 	if(err) throw err;
// 	console.log(files);
// })

// const EventEmitter = require("events");
// // event is class

// // const emitter = new EventEmitter();


// const Logger = require("./logger.js");
// const logger = new Logger();

// logger.on("messageLogged", function(params) {
// 	console.log("Listerner called: ", params);
// });

// logger.log("message");

// // Raise: logging(data:messsage)

// function worthless() {}
// console.log(worthless());
// console.log(global)

// function placeAnOrder(orderNumber) {
// 	console.log("Customer order:", orderNumber);

// 	cookAndDeliverFood(function() {
// 		console.log("Delivered food order:", orderNumber);
// 	});
// }
// function cookAndDeliverFood(callback) {
// 	setTimeout(callback, 5000)
// }
// placeAnOrder(1);
// placeAnOrder(2);
// placeAnOrder(3);
// placeAnOrder(4);
// placeAnOrder(5);



// var Bucky = {
// 	printFirstName: function() {
// 		console.log("My name is Bucky");
// 		console.log(this === Bucky);
// 	}
// }
// Bucky.printFirstName();
// var a = Bucky.printFirstName;
// a();
// function doSomethingWorthless() {
// 	console.log("worthless");
// 	console.log(this === global);
// }
// doSomethingWorthless();


// require("./jack.js")
// require("./emily.js");



// const path = require("path");
// var websiteHome="Desktop/BUdky//thenewasdf/index.html";
// console.log(path.normalize(websiteHome));
// console.log(path.dirname(websiteHome));
// console.log(path.basename(websiteHome));
// console.log(path.extname(websiteHome));



const http = require("http");
const fs = require("fs");

function onRequest(req, res) {
	if (req.url === "/") {
		res.writeHead(200, {
			"Content-Type": "text/html;charset=utf-8"
		});
		fs.createReadStream("./index.html").pipe(res);

	} else {
		res.writeHead(404, {
			"Content-Type": "text/plain;charset=utf-8"
		});
		res.end("Not found");
	};
}

http.createServer(onRequest).listen(3000, () => {
	console.log("server started...")
});


const a = [1,2];
a.push(3);
const profile = {
	firstName: '',
	lastName: '',
	setName: function(name) {
		let splitName = function(n) {
			let nameArray = n.split(' ');
			this.firstName = nameArray[0];
			this.lastName = nameArray[1];
		}
		splitName(name);
	}
}

profile.setName('john doe');
console.log(firstName)
console.log(profile.firstName);

const profile = {
	firstName: '',
	lastName: '',
	setName: function(name) {
		let splitName = (n) => {
			let nameArray = n.split(' ');
			this.firstName = nameArray[0];
			this.lastName = nameArray[1];
		}
		splitName(name);
	}
}

profile.setName('john doe');
console.log(firstName)
console.log(profile.firstName);
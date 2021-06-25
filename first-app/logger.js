const EventEmitter = require("events");
// event is class


var url = "http://www.baidu.com";
class Logger extends EventEmitter {
	log(message) {
		console.log(message);

		// Raise an event
		this.emit("messageLogged", {
			id: 1,
			url: "http://aaa.com"
		});
	}
}


module.exports = Logger;
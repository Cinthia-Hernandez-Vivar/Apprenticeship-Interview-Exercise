const express = require("express");
const app = express();
const port = 3000;
log = console.log;
app.get('/',(req, res) => {
	const message = "Cinthia Hernandez Vivar";
	const timestamp = Date.now();
	log(timestamp);
	res.json({
		message: message,
		timestamp: timestamp
	});
});
app.listen(port, () => console.log('App running on port 3000'));

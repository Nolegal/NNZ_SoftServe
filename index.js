const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));
app.post('/Forms/Login', (req, res, next)  => {
	console.log(req.body);
	res.statusCode = 200;
	res.end(JSON.stringify({message: "hello"}));
});
app.listen(3000);
var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.json({ message: "Hi there!" })
});





app.listen(8080, "127.0.0.1", function() {
    console.log("The Server Has Started!");
});
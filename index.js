//Install express server
let express = require('express');
let path = require('path');

let app = express();

// Serve only the static files form the dist directory
app.use(express.static('./transfer/dist/transfer'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname, '/transfer/dist/transfer/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
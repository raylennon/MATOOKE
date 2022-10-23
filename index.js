const express = require('express'); //Import the express dependency
const path = require('path');
var Gio = require('giojs');

const app = express();              //Instantiate an express app, the main work horse of this server
const PORT = process.env.PORT || 5000

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('public/index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
app.get('/fly', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('public/fly.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${PORT}`); 
});
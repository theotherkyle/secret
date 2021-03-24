/* eslint-env es6 */

/*
 * Dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


let ShowState = false; 

/*
 * Config
 */
//const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

/*
 * User Routes
 */

app.get('/startshow', (req, res) => {
  ShowState = true; 
  
  io.emit('show-control', "startshow");
   res.send('Starting the Show')
});
app.get('/endshow', (req, res) => {
  ShowState = false; 
   res.send('ending the Show')
});

app.get('/checkshowstatus', (req, res) => {
   res.send('' + ShowState)
});

app.get('/enroll', (req, res) => {
   res.send('enrolled')
});



/*
 * User Routes
 */

app.get('/', (req, res) => {
  res.sendfile('public/index.html');
});




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
      });
  
  socket.on('control-message', (msg) => {
      io.emit('show-control', msg);
  });
    
    

});

http.listen(process.env.PORT || port, () => {
  console.log('listening on *:3000');
});





/*
 * Listen
 */
//app.listen(process.env.PORT || port);
console.log(`app listening on port ${port}`);

const app = require('express')();
const http = require('http').createServer(app);
const socketio=require('socket.io')
const cors = require('cors')
const io = socketio(http)
// const io = require("socket.io")(http, {
//     origins: ["http://localhost:3000"]
//   });

const PORT= process.env.PORT || 5000
app.use(cors())

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('create-room',name=>{
      console.log('Then room name received is ',name);
  })
});

http.listen( PORT, () => {
  console.log(`listening on port ${PORT}`);
});
const io = require('socket.io')();
const net = require('net');
const path = require('path');
const runScript = require('./utils/runScript');
const contentPath = path.resolve(__dirname, './downloadContent.js');
console.log(__dirname)
const HOST = '127.0.0.1';//local
//const HOST = '192.168.1.83'; //PRODUCTION
const PORT = 8000;
const server = io.listen(PORT);
console.log('listening on port ', PORT);

server.on("connection", (socket) => {
  console.info(`Client connected [id=${socket.id}]`);

  socket.on('updateContent', data => {
    console.log("updating content")
    runScript(contentPath, function(err) {
      if (err) throw err;
      socket.emit('contentUpdated', data);
      console.log('finished running downloadContent.js');
      console.log(data);
    });
  
  });
});

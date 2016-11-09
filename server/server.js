var ed = require('./modules/ed25519-supercop');
var app = require('../node_modules/express')();
var server = require('http').createServer(app);
var io = require('../node_modules/socket.io').listen(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.send('WebSocket server is running...');
});

io.sockets.on('connection', function (socket) {
  socket.emit('conn', { connect: true });

  socket.on('createSeed', function (data) {
    var req = JSON.parse(data);
    var seed = ed.createSeed();

    emit('createSeed', seed);
    console.log('\ncreateSeed():'); console.log(seed);
  });

  socket.on('createKeyPair', function (data) {
    var req = JSON.parse(data);
    var keypair = ed.createKeyPair(Buffer(req));

    emit('createKeyPair', keypair);
    console.log('\ncreateKeyPair():'); console.log(keypair);
  });

  socket.on('sign', function (data) {
    var req = JSON.parse(data);
    var message = req.message;
    var publicKey = Buffer(req.publicKey);
    var secretKey = Buffer(req.secretKey);
    var signature = ed.sign(message, publicKey, secretKey);

    emit('sign', signature);
    console.log('\nsign():'); console.log(signature);
  });

  socket.on('verify', function (data) {
    var req = JSON.parse(data);
    var signature = Buffer(req.signature);
    var message = req.message;
    var publicKey = Buffer(req.publicKey);
    var ok = ed.verify(signature, message, publicKey);

    emit('verify', ok);
    console.log('\nverify():'); console.log(ok);
  });

  function emit(e, resp) {
    var r = JSON.stringify(resp);
    socket.emit(e, r);
  }
});

function isFunc(f){
  if ('function' == typeof(f)) {
  	return true;
  }
}

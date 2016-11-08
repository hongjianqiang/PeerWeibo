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

  socket.on('ed25519', function (data) {
    var req = JSON.parse(data);

    var ActionLists = {
      'createSeed': function(req) {
        var seed = ed.createSeed();

        emit('ed25519', seed);

        console.log('\ncreateSeed():'); console.log(seed);
      },
      'createKeyPair': function(req) {
        var keypair = ed.createKeyPair(Buffer(req.seed));

        emit('ed25519', keypair);

        console.log('\ncreateKeyPair():'); console.log(keypair);
      },
      'sign': function(req) {
        var message = req.message;
        var publicKey = Buffer(req.publicKey);
        var secretKey = Buffer(req.secretKey);
        var signature = ed.sign(message, publicKey, secretKey);

        emit('ed25519', signature);

        console.log('\nsign():'); console.log(signature);
      }
    };

    var ActionName = req.Action;
    var Do = ActionLists[ActionName];
    if (isFunc(Do)) { Do(req); }
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

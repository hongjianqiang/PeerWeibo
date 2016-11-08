let ed = require('./modules/ed25519-supercop');
let app = require('../node_modules/express')();
let server = require('http').createServer(app);
let io = require('../node_modules/socket.io').listen(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.send('WebSocket server is running...');
});

io.sockets.on('connection', function (socket) {
  socket.emit('conn', { connect: true });

  socket.on('ed25519', function (data) {
    let req = JSON.parse(data);

    let ActionLists = {
      'createSeed': function(req) {
        let seed = ed.createSeed();
        
        emit('ed25519', seed);

        console.log('\ncreateSeed():'); console.log(seed);
      },
      'createKeyPair': function(req) {
        let keypair = ed.createKeyPair(Buffer(req.seed));

        emit('ed25519', keypair);

        console.log('\ncreateKeyPair():'); console.log(keypair);
      },
      'sign': function(req) {
        let message = req.message;
        let publicKey = Buffer(req.publicKey);
        let secretKey = Buffer(req.secretKey);
        let signature = ed.sign(message, publicKey, secretKey);

        emit('ed25519', signature);

        console.log('\nsign():'); console.log(signature);
      }
    };

    let ActionName = req.Action;
    let Do = ActionLists[ActionName];
    if (isFunc(Do)) { Do(req); }
  });

  function emit(e, resp) {
    let r = JSON.stringify(resp);
    socket.emit(e, r);
  }
});

function isFunc(f){
  if ('function' == typeof(f)) {
  	return true;
  }
}
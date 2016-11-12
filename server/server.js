var moment = require('../node_modules/moment');
var ed = require('./modules/ed25519-supercop');
var DHT = require('../node_modules/webtorrent/node_modules/bittorrent-dht');
var app = require('../node_modules/express')();
var server = require('http').createServer(app);
var io = require('../node_modules/socket.io').listen(server);

var sock;
var wsConn = false;
var dhtReady = false;
var dht = new DHT({ verify: ed.verify });

server.listen(3000);

app.get('/', function (req, res) {
  res.send('WebSocket server is running...');
});

io.sockets.on('connection', function (socket) {
  sock = socket;
  wsConn = true;

  socket.emit('conn', { connect: true });

  socket.on('createSeed', function (data) {
    var req = JSON.parse(data);
    var seed = ed.createSeed();

    emit('createSeed', seed, socket);
    console.log('\ncreateSeed():'); console.log(seed);
  });

  socket.on('createKeyPair', function (data) {
    var req = JSON.parse(data);
    var keypair = ed.createKeyPair(Buffer(req));

    emit('createKeyPair', keypair, socket);
    console.log('\ncreateKeyPair():'); console.log(keypair);
  });

  socket.on('sign', function (data) {
    var req = JSON.parse(data);
    var message = req.message;
    var publicKey = Buffer(req.publicKey);
    var secretKey = Buffer(req.secretKey);
    var signature = ed.sign(message, publicKey, secretKey);

    emit('sign', signature, socket);
    console.log('\nsign():'); console.log(signature);
  });

  socket.on('verify', function (data) {
    var req = JSON.parse(data);
    var signature = Buffer(req.signature);
    var message = req.message;
    var publicKey = Buffer(req.publicKey);
    var ok = ed.verify(signature, message, publicKey);

    emit('verify', ok, socket);
    console.log('\nverify():'); console.log(ok);
  });

  socket.on('getMutableContentHash', function (data) {
    var req = JSON.parse(data);
    var keypair = {};
    var opts = {};

    /*
    var now = moment().format('YYYYMMDDHHmmss');
    var nowInt = parseInt(now, 10);

    var value = {
      type: 'weibo',
      name: req.fullName,
      content: '大家好，这是我的第一条微博。',
      date: now,
      prevHash: ''
    };

    var text = JSON.stringify(value);

    // var text = new Buffer( JSON.stringify(value) );
    // var text = new Buffer(200).fill('whatever'); // the payload you want to send
    */

    keypair.publicKey = Buffer(req.publicKey);
    keypair.secretKey = Buffer(req.secretKey);

    opts = {
      k: keypair.publicKey,
      seq: 0,
      v: 'signup',
      sign: function (buf) {
        return ed.sign(buf, keypair.publicKey, keypair.secretKey);
      }
    };
    
    console.log('\ngetMutableContentHash:');

    dht.put(opts, function (err, hash) {
      if ( err != null ) {
        console.error('error=', err);
        emit('getMutableContentHash', false, socket);
  
      } else {
        console.log('hash=', hash);
        emit('getMutableContentHash', hash, socket);
        
      }     
    });
  });

  if (dhtReady && wsConn) {
    sock.emit('dht', dht.toJSON());
  }
});

dht.listen(function () {
  console.log('Bittorrent-DHT is working...');
  console.log('NodeId: ' + dht.nodeId.toString('hex'));
});

dht.on('ready', function () {
  console.log('The DHT is fully bootstrapped.');
  dhtReady = true;

  if (dhtReady && wsConn) {
    sock.emit('dht', dht.toJSON());
  }
});

function emit(e, resp, socket) {
  var r = JSON.stringify(resp);
  socket.emit(e, r);
}

function isFunc (f) {
  if ('function' == typeof(f)) {
  	return true;
  }
}
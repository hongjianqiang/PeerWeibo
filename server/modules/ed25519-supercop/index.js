var o = require('os');
var bindings = require('./build/Release/supercop.node');

if ('x32' == o.arch()) {
  if ('Windows_NT' == o.type()) {
    
  }

} else if ('x64' == o.arch()) {
  if ('Windows_NT' == o.type()) {
    bindings = require('./dist/supercop_win.node');
    console.log('./dist/supercop_win.node');
  }

}

// var bindings = require('./build/Release/supercop.node')

exports.sign = function (message, publicKey, secretKey) {
  if (typeof message === 'string') message = Buffer(message)
  else if (!Buffer.isBuffer(message)) {
    throw new Error('message must be a buffer or a string')
  }
  if (typeof publicKey === 'string') publicKey = Buffer(publicKey, 'hex')
  else if (!Buffer.isBuffer(publicKey)) {
    throw new Error('public key must be a buffer or hex string')
  }
  if (typeof secretKey === 'string') secretKey = Buffer(secretKey, 'hex')
  else if (!Buffer.isBuffer(secretKey)) {
    throw new Error('secret key must be a buffer or hex string')
  }
  return bindings.sign(message, publicKey, secretKey)
}

exports.verify = function (signature, message, publicKey) {
  if (typeof signature === 'string') signature = Buffer(signature, 'hex')
  else if (!Buffer.isBuffer(signature)) {
    throw new Error('message must be a buffer or a string')
  }
  if (typeof message === 'string') message = Buffer(message)
  else if (!Buffer.isBuffer(message)) {
    throw new Error('message must be a buffer or a string')
  }
  if (typeof publicKey === 'string') publicKey = Buffer(publicKey, 'hex')
  else if (!Buffer.isBuffer(publicKey)) {
    throw new Error('public key must be a buffer or hex string')
  }
  return bindings.verify(signature, message, publicKey)
}

exports.createSeed = function () {
  return bindings.createSeed()
}

exports.createKeyPair = function (seed) {
  if (typeof seed === 'string') seed = Buffer(seed, 'hex')
  else if (!Buffer.isBuffer(seed)) {
    throw new Error('seed must be a buffer or hex string')
  }
  return bindings.createKeyPair(seed)
}

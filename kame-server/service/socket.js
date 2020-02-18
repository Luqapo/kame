const net = require('net');

const client = new net.Socket();

client.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('Connection ERROR: ', err.stack);
});

function init() {
  return client.connect(80, '192.168.4.1');
}

function write(val) {
  client.write(val);
}

module.exports = {
  init,
  write,
};

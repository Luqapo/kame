const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const mount = require('koa-mount');
const cors = require('@koa/cors');
const service = require('./service');

const PORT = process.env.PORT || 3000;
let appPromise;

const app = new Koa();
const router = new Router({ prefix: '/api' });

app.use(cors());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch(err) {
    // eslint-disable-next-line no-console
    console.error(err);
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = { error: err.message };
  }
});

app.use(mount('/', serve(path.join(__dirname, '..', 'kameUi'))));

router.get('/forward', async () => {
  console.log('Move forward');
  service.socket.write('1+');
});

router.get('/left', async () => {
  console.log('Move left');
  service.socket.write('3+');
});

router.get('/right', async () => {
  console.log('Move rught');
  service.socket.write('4+');
});

router.get('/stop', async () => {
  console.log('STOP');
  service.socket.write('5+');
});

router.get('/heart', async () => {
  console.log('heart');
  service.socket.write('6+');
});

router.get('/fire', async () => {
  console.log('fire');
  service.socket.write('7+');
});

router.get('/skull', async () => {
  console.log('jump');
  service.socket.write('8+');
});

router.get('/hello', async () => {
  console.log('hello');
  service.socket.write('9+');
});

router.get('/punch', async () => {
  console.log('punch');
  service.socket.write('10+');
});

router.get('/dance', async () => {
  console.log('dance');
  service.socket.write('11+');
});

router.get('/home', async () => {
  console.log('home');
  service.socket.write('15+');
});

app
  .use(router.routes())
  .use(router.allowedMethods());

function init() {
  if(!appPromise) {
    // eslint-disable-next-line no-async-promise-executor
    appPromise = new Promise(async (resolve) => {
      await service.socket.init();
      app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server listen on ${PORT}`);
        resolve(app);
      });
    });
  }
  return appPromise;
}

init();

module.exports = init;
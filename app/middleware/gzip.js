const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = () => {
  return async function gzip(ctx, next) {
    await next();

    // wait body and transform to gzip
    let body = ctx.body;
    if (!body) return;
    if (isJSON(body)) body = JSON.stringify(body);

    const stream = zlib.createGzip();
    stream.end(body);

    ctx.body = stream;
    ctx.set('Content-Encoding', 'gzip');
  }

}
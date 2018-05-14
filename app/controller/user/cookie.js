const Controller = require('egg').Controller;

class CookieController extends Controller {
  async count(ctx) {
    let count = ctx.cookies.get('count');
    count = count ? Number(count) : 0;
    ctx.cookies.set('count', ++count);
    ctx.session.visited = true;
    ctx.body = count;
  }
}

module.exports = CookieController;
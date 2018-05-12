const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    console.log(ctx);
    this.ctx.body = 'Hello World';
  }
}
module.exports = HomeController;
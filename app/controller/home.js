const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    const {
      helper
    } = ctx;
    this.ctx.body = helper.getNowTime();
  }
}
module.exports = HomeController;
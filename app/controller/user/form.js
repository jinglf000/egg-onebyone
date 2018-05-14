const Controller = require('egg').Controller;


class UserFormController extends Controller {
  async post(ctx) {
    ctx.body = `query ${JSON.stringify(ctx.query, '', '  ')}` + `body ${JSON.stringify(ctx.request.body, '', '    ')}`;
  }
}
module.exports = UserFormController;
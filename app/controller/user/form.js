const Controller = require('egg').Controller;


class UserFormController extends Controller {
  async post(ctx) {
    const rules = {
      name: {
        type: 'string'
      },
      age: {
        type: 'number'
      }
    };
    // validate
    ctx.validate(rules);
    ctx.body = `query ${JSON.stringify(ctx.query, '', '  ')}` +
      `body ${JSON.stringify(ctx.request.body, '', '    ')}`;
  }
}
module.exports = UserFormController;
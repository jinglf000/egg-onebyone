/**
 * controller 控制器入口
 * 在实际应用中，Controller
 * 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 Service。
 */


const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello World';
  }
}
module.exports = HomeController;
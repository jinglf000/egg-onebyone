const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = [{
        url: '/news/1',
        item: 'airplane',
        title: 'dss'
      },
      {
        item: 'goo',
        url: '/news/2',
        title: 'we can find it'
      }
    ];

    await this.ctx.render('news/list.tpl', {
      list: newsList
    });

  }
}

module.exports = NewsController;
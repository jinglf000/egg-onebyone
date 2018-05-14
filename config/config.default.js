exports.keys = '199310032753';

/* view 模板插件设置 */
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
}

/* 其他参数设置 */
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

/* 通用中间件设置，配置整个项目的中间件 */
/* 可以在路由规则里，为单个路由设置中间件 midleware */
exports.middleware = [
  'robot', 'gzip'
]

/* 中间件 robot 设置 */
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
}
/* csrf 设置*/
exports.security = {
  csrf: false
}
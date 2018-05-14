module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.post('/form', controller.user.form.post);
  router.get('/cookie', controller.user.cookie.count);
}
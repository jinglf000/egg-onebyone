module.exports = app => {
  app.on('request', ctx => {
    console.log(ctx);
  })
}


module.exports = function (app) {
  app.use('/user', require('./users'));
  // app.use('/crawel', require('./crawel'));
  // app.use('/student', require('./students'));
    // app.use('/signup', require('./signup'));
    // app.use('/signin', require('./signin'));
    // app.use('/signout', require('./signout'));
};
if (process.env.NODE_ENV === 'production') {
  console.log('Using production Store');
  module.exports = require('./configureStore.prod');
} else {
  console.log('Using development Store');
  module.exports = require('./configureStore.dev');
}

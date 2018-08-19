module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
  },
};

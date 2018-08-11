module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: {
    entry: ["babel-polyfill", "./src/main.js"],
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].chunkSortMode = 'none'
          return args
        })
    }
  }
}
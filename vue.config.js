module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/deplTest/'
      : '/',
  transpileDependencies: [
    'vuetify'
  ]
}

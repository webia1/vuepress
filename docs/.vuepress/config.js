module.exports = {
  title: 'Webia Docs',
  description: 'Theoretical Basics',
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '/Users/User/ENTWICKLUNG/vuepress/docs/assets'
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
}
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
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-footnote'));
      md.use(require('markdown-it-imsize'));
      md.use(require('markdown-it-smartarrows'));
    }
  }
}
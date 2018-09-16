module.exports = {
  title: 'Webia Docs',
  description: 'Theoretical Basics',
  themeConfig: {
    navbar: true,
    serviceWorker: {
      updatePopup: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    displayAllHeaders: true,
    sidebar: [{
        title: 'Overview',
        collapsable: true,
        children: [
          '/'
        ]
      },
      {
        title: 'JS & TS',
        collapsable: true,
        children: [
          '/js/'
        ]
      },
      {
        title: 'Git',
        collapsable: true,
        children: [
          '/git/'
        ]
      },
      {
        title: 'Vuepress',
        collapsable: true,
        children: [
          '/vuepress/'
        ]
      }
    ]
  },
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
      md.use(require('markdown-it-plantuml'));
    }
  }
}
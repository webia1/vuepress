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
        title: 'Architecture Principles',
        collapsable: true,
        children: [
          '/architecture/'
        ]
      },
      {
        title: 'Angular',
        collapsable: true,
        children: [
          '/angular/'
        ]
      },
      {
        title: 'Angular CLI (@angular/cli)',
        collapsable: true,
        children: [
          '/angular-cli/'
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
        title: 'Vue',
        collapsable: true,
        children: [
          '/vue/'
        ]
      },
      {
        title: 'Vue CLI (@vue/cli)',
        collapsable: true,
        children: [
          '/vue-cli/'
        ]
      },
      {
        title: 'Vuepress',
        collapsable: true,
        children: [
          '/vuepress/'
        ]
      },
      {
        title: 'NodeJS: Env',
        collapsable: true,
        children: [
          '/nodejs/Env'
        ]
      }
    ]
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
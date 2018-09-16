# VuePress

[[toc]]

## Import Code Snippets

`<<< @/docs/code/js/Array.prototype.filter.js`

### Highlighting a certain line

`<<< @/docs/code/js/Array.prototype.filter.js{2}`

### Highlighting several lines

`<<< @/docs/code/js/Array.prototype.filter.js{2,5,7-9}`

## Using `/docs/assets`

### Configure Alias

`docs/config.js`

```js
module.exports = {
  ...,
  configureWebpack: {
      resolve: {
        alias: {
          '@assets': '/fromRoot/to/vuepress/docs/assets'
        }
      }
    },
  ...
}
```

### Link to this alias

`![Accessibility](~@assets/images/accessibility/ux-a11y-rules.jpg)`

## App Level Enhancements

**From the official documentation:** Since the VuePress app is a standard Vue app, you can apply app-level enhancements by creating a file `.vuepress/enhanceApp.js`, which will be imported into the app if it is present. The file should `export default` a hook function which will receive an object containing some app level values. You can use this hook to install additional Vue plugins, register global components, or add additional router hooks:

```jsx
export default ({
  Vue, // the version of Vue being used
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // ...apply enhancements to the app
};
```

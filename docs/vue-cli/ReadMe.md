# Vue CLI (@vue/cli)

## Setup

Install `@vue/cli` globally and create a new Project
with `vue create ...` and follow the instructions. After
the installation use `vue add vuetify` to install
Vuetify UI Library in form of a plugin (for example).

```shell
npm install -g @vue/cli
vue create vue-app
cd vue-app
vue add vuetify
```

The usage of `vue command`:

```shell
Usage: vue <command> [options]

Commands:
  create [options] <app-name>
  add <plugin> [pluginOptions]
  invoke <plugin> [pluginOptions]
  inspect [options][paths...]
  serve [options][entry]
  build [options][entry]
  ui [options]
  init [options] <template> <app-name>  (@vue/cli-init)
  config [options][value]
```

### Some @vue/cli commands (excerpt)

#### `vue create`

Some interesting options:

```shell
  -m, --packageManager <command>
  -r, --registry <url>
  -f, --force
  -x, --proxy
  -b, --bare
```

#### `vue inspect`

Show rules or plugins,..

```shell
vue inspect --rules
vue inspect --plugins
```

#### `vue serve`

Open Browser,..

```shell
vue serve --open
```

# Browserify + Vueify example

> Example using [vueify](https://github.com/vuejs/vueify) with Browserify.

## Setup

``` bash
npm install

# dev server at localhost:8080 with hot reload
npm run dev

# production build
npm run build
```

## Note

This example comes with hot reload for `*.vue` components, which requires the [browserify-hmr](https://github.com/AgentME/browserify-hmr) plugin.

The following dependencies are installed in order to use transforms like `lang="es"`, `lang="jade"` and `lang="stylus"` in `*.vue` files:

- babel
- babel-runtime
- jade
- stylus

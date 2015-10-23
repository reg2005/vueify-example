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

#### ES2015 by Default

Vueify 4.0+ automatically transforms the JavaScript in your `*.vue` components using Babel. Write ES2015 today!

The default Babel options used for Vue.js components are:

``` js
{
  // use babel-runtime library for common helpers
  optional: ['runtime'],
  // use loose mode for faster builds
  loose: 'all',
  // disable non-standard stuff (e.g. JSX)
  nonStandard: false
}
```

If you wish to mofidy this, you can add a `vue.config.js` and configure the option for `babel`:

``` js
// vue.config.js
module.exports = function (vueify) {
  vueify.option('babel', {
    stage: 0, // use all the fancy stage 0 features!
    optional: ['runtime'],
    loose: 'all',
    nonStandard: false
  })
}
```

#### Hot Reload Enabled

This example comes with hot reload for `*.vue` components, which requires the [browserify-hmr](https://github.com/AgentME/browserify-hmr) plugin.

#### Pre-Processors

The following dependencies are installed in order to use pre-processors such as `lang="jade"` and `lang="stylus"` in `*.vue` files:

- jade
- stylus

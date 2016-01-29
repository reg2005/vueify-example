# Browserify + Vueify example (deprecated)

Deprecated in favor of [vue-cli](https://github.com/vuejs/vue-cli) and [browserify vue-cli template](https://github.com/vuejs-templates/browserify).

> Example using [vueify](https://github.com/vuejs/vueify) with Browserify.

## Setup

``` bash
npm install

# dev server at localhost:8080 with hot reload
npm run dev

# production build
npm run build

# lint JavaScript in both *.js and *.vue files
npm run lint

# run tests in PhantomJS
npm test
```

## Notes

#### ES2015 by Default

Vueify 4.0+ automatically transforms the JavaScript in your `*.vue` components using Babel. Write ES2015 today!

The default Babel options used for Vue.js components are:

``` js
{
  presets: ['es2015'],
  plugins: ['transform-runtime']
}
```

If you wish to modify this, you can add a `vue.config.js` and configure the option for `babel`:

``` js
// vue.config.js
module.exports = {
  babel: {
    // enable stage-0 features, make sure to install
    // babel-presets-stage-0
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
```

#### Hot Reload Enabled

This example comes with hot reload for `*.vue` components, which requires the [browserify-hmr](https://github.com/AgentME/browserify-hmr) plugin.

#### Pre-Processors

The following dependencies are installed in order to use pre-processors such as `lang="jade"` and `lang="stylus"` in `*.vue` files:

- jade
- stylus

#### Unit Testing

The unit tests are written against the [Jasmine testing framework](http://jasmine.github.io/edge/introduction.html) and run using [Karma](http://karma-runner.github.io/0.13/index.html) inside [PhantomJS](http://phantomjs.org/). You can edit `karma.conf.js` to run tests in different browsers or use a different testing framework (e.g. Mocha).

The testing code is bundled with [karma-browserify](https://github.com/Nikku/karma-browserify) using the same transforms the app uses, which means you can use ES2015 and import `*.vue` files like in your app code.
